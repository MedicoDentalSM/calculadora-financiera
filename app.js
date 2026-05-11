// ── CÁLCULOS ──────────────────────────────────────────────────────
function calcular(t, importe) {
    let cuota, primeraCuota, totalPaciente, costeClinicaEur, aperturaEur = 0;
    if (t.tin === 0) {
        if (t.comApFinanciado) {
            const capitalTotal = importe * (1 + t.comAp / 100);
            cuota = capitalTotal / t.plazo;
            primeraCuota = cuota;
            totalPaciente = capitalTotal;
            aperturaEur = importe * (t.comAp / 100);
        } else {
            cuota = importe / t.plazo;
            aperturaEur = importe * (t.comAp / 100);
            primeraCuota = cuota + aperturaEur;
            totalPaciente = importe * (1 + t.comAp / 100);
        }
    } else {
        if (t.tin > 0 && t.tin < 1) {
            // Coeficiente directo (Santander)
            cuota = importe * t.tin;
        } else {
            // TIN en % (9.99, 6.95, 10.95...)
            const im = t.tin / 100 / 12;
            cuota = importe * im / (1 - Math.pow(1 + im, -t.plazo));
        }
        primeraCuota = cuota;
        totalPaciente = cuota * t.plazo;
        aperturaEur = 0;
        interesesTotal = totalPaciente - importe;
    }
    costeClinicaEur = importe * (t.costeCl / 100);
    return { cuota, primeraCuota, totalPaciente, costeClinicaEur, aperturaEur, interesesTotal: t.tin > 0 ? totalPaciente - importe : 0 };
}

// ── STATE ─────────────────────────────────────────────────────────
let state = {
    importe: 3000,
    cuotas: 12,
    filtro: 'all',
    filtroCostos: 'all',
    filtroApertura: 'all',
    filtroClinica: 'all',   // ← AÑADIDO
    sort: 'cuota',
    cuotaMax: null
};

// ── HELPER: comprueba si un plazo tiene resultados con los filtros activos ──
function plazoTieneResultados(plazo) {
    return TARIFAS.some(t => {
        if (t.plazo !== plazo) return false;
        if (t.minImp !== undefined && state.importe < t.minImp) return false;
        if (t.maxImp !== undefined && state.importe > t.maxImp) return false;
        if (state.filtroCostos === 'paciente' && t.costeCl !== 0) return false;
        if (state.filtroCostos === 'compartido' && (t.comAp <= 0 || t.costeCl <= 0)) return false;
        if (state.filtroCostos === 'clinica' && (t.comAp !== 0 || t.costeCl === 0)) return false;
        if (state.filtroApertura === 'primera' && !(t.comApFinanciado === false && t.comAp > 0)) return false;
        if (state.filtroApertura === 'financiada' && (!t.comApFinanciado || t.comAp <= 0)) return false;
        if (state.filtroClinica !== 'all' && t.clinica !== state.filtroClinica) return false; // ← AÑADIDO
        return true;
    });
}

// ── SLIDER DE PLAZOS ──────────────────────────────────────────────
const PLAZOS_DISPONIBLES = [...new Set(TARIFAS.map(t => t.plazo))].sort((a, b) => a - b);

function renderChips() {
    const slider = document.getElementById('plazo-slider');
    const labelsEl = document.getElementById('plazo-slider-labels');

    if (!plazoTieneResultados(state.cuotas)) {
        const primero = PLAZOS_DISPONIBLES.find(p => plazoTieneResultados(p));
        if (primero) {
            state.cuotas = primero;
            document.getElementById('cuotas').value = primero;
        }
    }

    const idx = PLAZOS_DISPONIBLES.indexOf(state.cuotas);
    slider.max = PLAZOS_DISPONIBLES.length - 1;
    slider.value = idx >= 0 ? idx : 0;

    labelsEl.innerHTML = '';
    PLAZOS_DISPONIBLES.forEach(p => {
        const span = document.createElement('span');
        span.textContent = p + 'm';
        const disponible = plazoTieneResultados(p);
        span.className = [
            p === state.cuotas ? 'active' : '',
            !disponible ? 'disabled' : ''
        ].join(' ').trim();
        labelsEl.appendChild(span);
    });

    slider.oninput = () => {
        const plazo = PLAZOS_DISPONIBLES[+slider.value];
        if (!plazoTieneResultados(plazo)) {
            slider.value = PLAZOS_DISPONIBLES.indexOf(state.cuotas);
            return;
        }
        state.cuotas = plazo;
        document.getElementById('cuotas').value = state.cuotas;
        renderChips();
        renderResults();
    };
}

// ── FORMATO ───────────────────────────────────────────────────────
function fmt(n) { return n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'; }
function fmtPct(n) { return n.toFixed(2) + '%'; }

// ── RENDER ────────────────────────────────────────────────────────
function renderResults() {
    const grid = document.getElementById('results-grid');
    const { importe, cuotas, filtro, filtroCostos, filtroApertura, filtroClinica, sort, cuotaMax } = state; // ← filtroClinica añadido

    let filtered = TARIFAS.filter(t => {
        if (t.plazo !== cuotas) return false;
        if (filtro === 'sin' && t.tipo !== 'sin') return false;
        if (filtro === 'con' && t.tipo !== 'con') return false;
        if (t.minImp !== undefined && importe < t.minImp) return false;
        if (t.maxImp !== undefined && importe > t.maxImp) return false;
        if (filtroCostos === 'paciente' && t.costeCl !== 0) return false;
        if (filtroCostos === 'compartido' && (t.comAp <= 0 || t.costeCl <= 0)) return false;
        if (filtroCostos === 'clinica' && (t.comAp !== 0 || t.costeCl === 0)) return false;
        if (filtroApertura === 'primera' && !(t.comApFinanciado === false && t.comAp > 0)) return false;
        if (filtroApertura === 'financiada' && (!t.comApFinanciado || t.comAp <= 0)) return false;
        if (filtroClinica !== 'all' && t.clinica !== filtroClinica) return false; // ← AÑADIDO
        return true;
    });

    let results = filtered.map(t => ({ ...t, ...calcular(t, importe) }));

    if (cuotaMax !== null && cuotaMax > 0) {
        results = results.filter(r => r.cuota <= cuotaMax);
    }

    const sortKey = sort === 'cuota' ? 'cuota' : sort === 'total' ? 'totalPaciente' : sort === 'descuento' ? 'costeClinicaEur' : 'cuota';
    results.sort((a, b) => a[sortKey] - b[sortKey]);

    document.getElementById('results-title').textContent = `Opciones para ${importe.toLocaleString('es-ES')} € a ${cuotas} meses`;
    document.getElementById('results-count').textContent = results.length === 0 ? '' : `${results.length} opción${results.length !== 1 ? 'es' : ''} disponible${results.length !== 1 ? 's' : ''}`;

    if (results.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
          </svg>
          <h3>Sin resultados</h3>
          <p>No hay tarifas disponibles para ${cuotas} meses y ${importe.toLocaleString('es-ES')} €${cuotaMax ? ' con cuota ≤ ' + fmt(cuotaMax) : ''}.</p>
        </div>`;
        return;
    }

    grid.innerHTML = '';
    results.forEach((r, i) => {
        const isBest = i === 0;
        const rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : 'rank-other';
        const rankEmoji = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);

        const subtitleExtra = r.tin > 0 && r.tin < 1
            ? ` · Coef. ${r.tin}`
            : r.tin >= 1
                ? ` · TIN ${r.tin}%`
                : r.comAp > 0
                    ? ` · Apertura ${fmtPct(r.comAp)}`
                    : ' · Sin comisión cliente';

        const hasPrimeraCuotaDif = !r.comApFinanciado && r.primeraCuota > r.cuota + 0.01;
        const hasAperturaProrrateada = r.comApFinanciado && r.comAp > 0;

        const cuotaSinApertura = hasAperturaProrrateada ? importe / r.plazo : null;
        const aperturaProrrateadaEur = hasAperturaProrrateada ? r.cuota - cuotaSinApertura : null;

        const mainRowContent = hasPrimeraCuotaDif
            ? `<div class="card-cuotas-bloque">
                 <div class="card-cuota-row">
                   <span class="card-main-value">${fmt(r.cuota)}</span>
                   <span class="card-cuota-tag">× ${r.plazo - 1} meses</span>
                 </div>
                 <div class="card-cuota-row card-cuota-row--primera">
                   <span class="card-main-value card-main-value--primera">${fmt(r.primeraCuota)}</span>
                   <span class="card-cuota-tag">× mes 1 (con apertura)</span>
                 </div>
               </div>`
            : hasAperturaProrrateada
                ? `<div class="card-cuotas-bloque">
                 <div class="card-cuota-row">
                   <span class="card-main-value">${fmt(r.cuota)}</span>
                   <span class="card-cuota-tag">× ${r.plazo} meses</span>
                 </div>
                 <div class="card-cuota-row card-cuota-row--primera">
                   <span class="card-main-value card-main-value--primera">${fmt(aperturaProrrateadaEur)}/mes apertura</span>
                   <span class="card-cuota-tag">incluida en cada cuota</span>
                 </div>
               </div>`
                : `<div class="card-cuotas-bloque card-cuotas-bloque--single">
                 <div class="card-cuota-row">
                   <span class="card-main-value">${fmt(r.cuota)}</span>
                   <span class="card-cuota-tag">× ${r.plazo} meses</span>
                 </div>
               </div>`;

        const costeClienteStat = `<div class="stat">
           <span class="stat-label">Coste paciente (Apertura)</span>
           <span class="stat-value highlight-good">${fmt(r.aperturaEur)} (${fmtPct(r.comAp)})</span>
        </div>`;

        const descuentoStat = `<div class="stat">
               <span class="stat-label">Coste asumido por la clínica</span>
               <span class="stat-value highlight-good">${fmt(r.costeClinicaEur)} (${fmtPct(r.costeCl)})</span>
             </div>`;

        const interesesStat = `<div class="stat">
               <span class="stat-label">Coste paciente (Intereses)</span>
               <span class="stat-value highlight-good">${fmt(r.interesesTotal)}</span>
             </div>`;

        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.animationDelay = (i * 40) + 'ms';
        card.innerHTML = `
          ${isBest ? '<div class="best-badge">✦ Mejor cuota</div>' : ''}
          <div class="card-rank ${rankClass}">${rankEmoji}</div>
          <div class="card-badge ${r.tipo === 'sin' ? 'badge-sin' : 'badge-con'}">
            ${r.tipo === 'sin' ? '0% intereses' : 'Con intereses'}
          </div>
          <div class="card-title">${r.fin}</div>
          <div class="card-subtitle">${r.oferta}${subtitleExtra}</div>
          <div class="card-main-row">${mainRowContent}</div>
          <div class="card-divider"></div>
          <div class="card-stats">
            <div class="stat">
              <span class="stat-label">Total a pagar del Paciente</span>
              <span class="stat-value">${fmt(r.totalPaciente)}</span>
            </div>
            ${costeClienteStat}
            ${descuentoStat}
            ${interesesStat}
          </div>`;
        grid.appendChild(card);
    });
}

// ── EVENTOS ───────────────────────────────────────────────────────
document.getElementById('importe').addEventListener('input', e => {
    state.importe = Math.max(90, Math.min(30000, parseFloat(e.target.value) || 90));
    renderChips();
    renderResults();
});

document.getElementById('cuotas').addEventListener('input', e => {
    state.cuotas = Math.max(1, parseInt(e.target.value) || 12);
    renderChips();
    renderResults();
});

document.querySelectorAll('[data-filter-costos]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-costos]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
        state.filtroCostos = btn.dataset.filterCostos;
        renderChips();
        renderResults();
    });
});

document.querySelectorAll('[data-filter-apertura]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-apertura]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
        state.filtroApertura = btn.dataset.filterApertura;
        renderChips();
        renderResults();
    });
});

// ── EVENTO SELECT CLÍNICA ─────────────────────────────────────────
document.getElementById('clinica-select').addEventListener('change', e => {
    state.filtroClinica = e.target.value;
    renderChips();
    renderResults();
});

document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.sort = btn.dataset.sort;
        renderResults();
    });
});

// ── THEME TOGGLE ──────────────────────────────────────────────────
(function () {
    const t = document.querySelector('[data-theme-toggle]'), r = document.documentElement;
    let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    r.setAttribute('data-theme', d);
    t && t.addEventListener('click', () => {
        d = d === 'dark' ? 'light' : 'dark';
        r.setAttribute('data-theme', d);
        t.innerHTML = d === 'dark'
            ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
            : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    });
})();

renderChips();
renderResults();