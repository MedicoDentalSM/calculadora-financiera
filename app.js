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
        const im = t.tin / 100 / 12;
        cuota = importe * im / (1 - Math.pow(1 + im, -t.plazo));
        primeraCuota = cuota;
        totalPaciente = cuota * t.plazo;
        aperturaEur = 0;
    }
    costeClinicaEur = importe * (t.costeCl / 100);
    return { cuota, primeraCuota, totalPaciente, costeClinicaEur, aperturaEur, interesesTotal: t.tin > 0 ? totalPaciente - importe : 0 };
}

// ── STATE ─────────────────────────────────────────────────────────
let state = { importe: 3000, cuotas: 12, filtro: 'all', filtroCostos: 'all', sort: 'cuota', cuotaMax: null };

// ── CHIPS ─────────────────────────────────────────────────────────
const PLAZOS_DISPONIBLES = [...new Set(TARIFAS.map(t => t.plazo))].sort((a, b) => a - b);
function renderChips() {
    const container = document.getElementById('chips-container');
    container.innerHTML = '';
    PLAZOS_DISPONIBLES.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'chip' + (p === state.cuotas ? ' active' : '');
        btn.textContent = p + 'm';
        btn.addEventListener('click', () => {
            state.cuotas = p;
            document.getElementById('cuotas').value = p;
            renderChips();
            renderResults();
        });
        container.appendChild(btn);
    });
}

// ── FORMATO ───────────────────────────────────────────────────────
function fmt(n) { return n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'; }
function fmtPct(n) { return n.toFixed(2) + '%'; }

// ── RENDER ────────────────────────────────────────────────────────
function renderResults() {
    const grid = document.getElementById('results-grid');
    // const sumBar = document.getElementById('summary-bar');
    const { importe, cuotas, filtro, filtroCostos, sort, cuotaMax } = state;

    let filtered = TARIFAS.filter(t => {
        if (t.plazo !== cuotas) return false;
        if (filtro === 'sin' && t.tipo !== 'sin') return false;
        if (filtro === 'con' && t.tipo !== 'con') return false;
        if (t.minImp !== undefined && importe < t.minImp) return false;
        if (t.maxImp !== undefined && importe > t.maxImp) return false;

        // Filtro de costos
        if (filtroCostos === 'paciente' && t.costeCl !== 0) return false;
        if (filtroCostos === 'compartido' && (t.comAp <= 0 || t.costeCl <= 0)) return false;
        if (filtroCostos === 'clinica' && (t.comAp !== 0 || t.costeCl === 0)) return false;

        return true;
    });

    let results = filtered.map(t => ({ ...t, ...calcular(t, importe) }));

    // Filtrar por cuota máxima si está definida
    if (cuotaMax !== null && cuotaMax > 0) {
        results = results.filter(r => r.cuota <= cuotaMax);
    }

    const sortKey = sort === 'cuota' ? 'cuota' : sort === 'total' ? 'totalPaciente' : 'costeClinicaEur';
    results.sort((a, b) => {
        if (a.costeClinicaEur !== b.costeClinicaEur) {
            return a.costeClinicaEur - b.costeClinicaEur;
        }
        return a[sortKey] - b[sortKey];
    });

    document.getElementById('results-title').textContent = `Opciones para ${importe.toLocaleString('es-ES')} € a ${cuotas} meses`;
    document.getElementById('results-count').textContent = results.length === 0 ? '' : `${results.length} opción${results.length !== 1 ? 'es' : ''} disponible${results.length !== 1 ? 's' : ''}`;

    /* if (results.length > 0) {
        sumBar.style.display = 'grid';
        document.getElementById('sum-cuota').textContent = fmt(results[0].cuota);
        document.getElementById('sum-opciones').textContent = results.length;
        
    } else {
        sumBar.style.display = 'none';
    } */

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

        const hasPrimeraCuotaDif = !r.comApFinanciado && r.primeraCuota > r.cuota + 0.01;
        const subtitleExtra = r.tin > 0
            ? ` · TIN ${r.tin}%`
            : r.comAp > 0
                ? ` · Apertura ${fmtPct(r.comAp)}`
                : ' · Sin comisión cliente';

        // Bloque de apertura (solo si hay importe de apertura > 0)
        const aperturaBlock = r.aperturaEur > 0
            ? `<div class="card-apertura-box">
               <div class="card-apertura-label">${r.comApFinanciado ? 'Apertura financiada' : 'Apertura en 1ª cuota'}</div>
             </div>`
            : '';

        // Stat de 1ª cuota si difiere de la cuota normal (tarjeta con apertura en 1ª)
        const primeraCuotaStat = hasPrimeraCuotaDif
            ? `<div class="stat">
               <span class="stat-label">1ª cuota</span>
               <span class="stat-value highlight-good">${fmt(r.primeraCuota)}</span>
             </div>`
            : '';

        const costeClienteStat = r.aperturaEur > 0
            ? `<div class="stat">
           <span class="stat-label">Coste paciente (Apertura)</span>
           <span class="stat-value highlight-good">${fmt(r.aperturaEur)} (${fmtPct(r.comAp)})</span>
       </div>`
            : '';

        const descuentoStat = r.costeClinicaEur > 0
            ? `<div class="stat">
               <span class="stat-label">Descuento Clínica</span>
               <span class="stat-value highlight-good">${fmt(r.costeClinicaEur)} (${fmtPct(r.costeCl)})</span>
             </div>`
            : '';

        const interesesStat = r.tin > 0
            ? `<div class="stat">
               <span class="stat-label">Coste paciente (Intereses)</span>
               <span class="stat-value highlight-good">${fmt(r.interesesTotal)}</span>
             </div>`
            : '';

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
          <div class="card-main-row">
            <div>
              <div class="card-main-value">${fmt(r.cuota)}</div>
              <div class="card-main-label">/ mes durante ${r.plazo} meses</div>
            </div>
            ${aperturaBlock}
          </div>
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
    renderResults();
});
document.getElementById('cuotas').addEventListener('input', e => {
    state.cuotas = Math.max(1, parseInt(e.target.value) || 12);
    renderChips();
    renderResults();
});
document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
        state.filtro = btn.dataset.filter;
        renderResults();
    });
});

document.querySelectorAll('[data-filter-costos]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-costos]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
        state.filtroCostos = btn.dataset.filterCostos;
        renderResults();
    });
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
