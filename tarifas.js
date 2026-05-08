// tarifas.js — Edita solo este archivo para actualizar tarifas.
const TARIFAS = [
    // SOFINCO (min 200€, max 10.000€)
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 3, comAp: 0, costeCl: 2.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 6, comAp: 0, costeCl: 3.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 10, comAp: 0, costeCl: 4.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 12, comAp: 0, costeCl: 4.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 18, comAp: 0, costeCl: 6.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 20, comAp: 0, costeCl: 7.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 24, comAp: 0, costeCl: 8.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 30, comAp: 0, costeCl: 10.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 36, comAp: 0, costeCl: 12.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 1", tipo: "sin", plazo: 48, comAp: 0, costeCl: 17.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 6, comAp: 2.50, costeCl: 1.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 10, comAp: 2.50, costeCl: 1.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 12, comAp: 2.50, costeCl: 2.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 18, comAp: 2.50, costeCl: 3.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 20, comAp: 2.50, costeCl: 4.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 24, comAp: 2.50, costeCl: 5.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 30, comAp: 2.50, costeCl: 7.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 36, comAp: 2.50, costeCl: 9.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 2", tipo: "sin", plazo: 48, comAp: 2.50, costeCl: 14.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 10, comAp: 3.50, costeCl: 0.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 12, comAp: 3.50, costeCl: 1.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 18, comAp: 3.50, costeCl: 2.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 20, comAp: 3.50, costeCl: 3.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 24, comAp: 3.50, costeCl: 4.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 30, comAp: 3.50, costeCl: 6.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 36, comAp: 3.50, costeCl: 8.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 3", tipo: "sin", plazo: 48, comAp: 3.50, costeCl: 13.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 12, comAp: 4.75, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 18, comAp: 4.75, costeCl: 1.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 20, comAp: 4.75, costeCl: 2.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 24, comAp: 4.75, costeCl: 3.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 30, comAp: 4.75, costeCl: 5.50, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 36, comAp: 4.75, costeCl: 7.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 4", tipo: "sin", plazo: 48, comAp: 4.75, costeCl: 12.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 5", tipo: "sin", plazo: 18, comAp: 6.25, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 5", tipo: "sin", plazo: 20, comAp: 6.25, costeCl: 0.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 5", tipo: "sin", plazo: 24, comAp: 6.25, costeCl: 1.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 5", tipo: "sin", plazo: 30, comAp: 6.25, costeCl: 4.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 5", tipo: "sin", plazo: 36, comAp: 6.25, costeCl: 5.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 5", tipo: "sin", plazo: 48, comAp: 6.25, costeCl: 10.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 6", tipo: "sin", plazo: 20, comAp: 7.00, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 6", tipo: "sin", plazo: 24, comAp: 7.00, costeCl: 1.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 6", tipo: "sin", plazo: 30, comAp: 7.00, costeCl: 3.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 6", tipo: "sin", plazo: 36, comAp: 7.00, costeCl: 5.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 6", tipo: "sin", plazo: 48, comAp: 7.00, costeCl: 10.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 7", tipo: "sin", plazo: 24, comAp: 8.00, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 7", tipo: "sin", plazo: 30, comAp: 8.00, costeCl: 2.25, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 7", tipo: "sin", plazo: 36, comAp: 8.00, costeCl: 4.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 7", tipo: "sin", plazo: 48, comAp: 8.00, costeCl: 9.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 8", tipo: "sin", plazo: 30, comAp: 10.25, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 8", tipo: "sin", plazo: 36, comAp: 10.25, costeCl: 1.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 8", tipo: "sin", plazo: 48, comAp: 10.25, costeCl: 6.75, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 9", tipo: "sin", plazo: 36, comAp: 12.00, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "Oferta 9", tipo: "sin", plazo: 48, comAp: 12.00, costeCl: 5.00, tin: 0, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "NLH", tipo: "con", plazo: 36, comAp: 0, costeCl: 0, tin: 10.95, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "NLH", tipo: "con", plazo: 42, comAp: 0, costeCl: 0, tin: 10.95, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "NLH", tipo: "con", plazo: 48, comAp: 0, costeCl: 0, tin: 10.95, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "NLH", tipo: "con", plazo: 54, comAp: 0, costeCl: 0, tin: 10.95, minImp: 200, maxImp: 10000 },
    { fin: "SOFINCO", oferta: "NLH", tipo: "con", plazo: 60, comAp: 0, costeCl: 0, tin: 10.95, minImp: 200, maxImp: 10000 },

    // ─────────────────────────────────────────────────────────────────
    // VENTAJON · CAIXABANK — PRÉSTAMO GRATUITO (150€ - 30.000€)
    // DTO = costeCl (descuento clínica, financiado)
    // GTA = comAp  (gastos cliente, financiado)
    // ─────────────────────────────────────────────────────────────────

    // NRY — 100% coste clínica, 0% cliente
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 3, comAp: 0, costeCl: 2.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 6, comAp: 0, costeCl: 2.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 12, comAp: 0, costeCl: 4.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 18, comAp: 0, costeCl: 5.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 24, comAp: 0, costeCl: 7.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 30, comAp: 0, costeCl: 9.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 36, comAp: 0, costeCl: 10.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY", tipo: "sin", plazo: 48, comAp: 0, costeCl: 12.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },

    // NRW — coste compartido (DTO = GTA)
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 3, comAp: 1.00, costeCl: 1.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 6, comAp: 1.25, costeCl: 1.25, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 12, comAp: 2.00, costeCl: 2.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 18, comAp: 2.75, costeCl: 2.75, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 24, comAp: 3.50, costeCl: 3.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 30, comAp: 4.75, costeCl: 4.75, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 36, comAp: 5.25, costeCl: 5.25, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW", tipo: "sin", plazo: 48, comAp: 6.25, costeCl: 6.25, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },

    // NRX — 0% clínica, 100% cliente
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 3, comAp: 2.00, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 6, comAp: 2.50, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 12, comAp: 4.00, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 18, comAp: 5.50, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 24, comAp: 7.00, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 30, comAp: 9.50, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 36, comAp: 10.50, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX", tipo: "sin", plazo: 48, comAp: 12.50, costeCl: 0, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },

    // NRV — Con intereses TIN 10.95%, 0% clínica (12 a 60 meses)
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 12, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 18, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 24, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 30, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 36, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 42, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 48, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 54, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 60, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },

    /* // VENTAJON · CaixaBank — TARJETA (max 3.000€, comApFinanciado:false = apertura en 1ª cuota)
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 3, comAp: 1.73, costeCl: 0.00, tin: 0, minImp: 90, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 6, comAp: 2.60, costeCl: 0.00, tin: 0, minImp: 120, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 10, comAp: 3.40, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 12, comAp: 3.70, costeCl: 0.00, tin: 0, minImp: 240, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 18, comAp: 5.28, costeCl: 0.16, tin: 0, minImp: 360, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 24, comAp: 6.39, costeCl: 1.99, tin: 0, minImp: 480, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 36, comAp: 9.44, costeCl: 3.78, tin: 0, minImp: 720, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta CS — 100% cliente", tipo: "sin", plazo: 48, comAp: 11.86, costeCl: 5.53, tin: 0, minImp: 960, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 3, comAp: 0.00, costeCl: 1.73, tin: 0, minImp: 90, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 6, comAp: 0.00, costeCl: 2.60, tin: 0, minImp: 120, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 10, comAp: 0.00, costeCl: 3.40, tin: 0, minImp: 200, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 12, comAp: 0.00, costeCl: 3.70, tin: 0, minImp: 240, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 18, comAp: 0.00, costeCl: 5.28, tin: 0, minImp: 360, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 24, comAp: 0.00, costeCl: 6.39, tin: 0, minImp: 480, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 36, comAp: 0.00, costeCl: 9.44, tin: 0, minImp: 720, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta 9N — 0% cliente", tipo: "sin", plazo: 48, comAp: 0.00, costeCl: 11.86, tin: 0, minImp: 960, maxImp: 3000, comApFinanciado: false },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 12, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 18, comAp: 0, costeCl: 0, tin: 10.95, minImp: 360, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 24, comAp: 0, costeCl: 0, tin: 10.95, minImp: 480, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 30, comAp: 0, costeCl: 0, tin: 10.95, minImp: 600, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 36, comAp: 0, costeCl: 0, tin: 10.95, minImp: 720, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 42, comAp: 0, costeCl: 0, tin: 10.95, minImp: 840, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 48, comAp: 0, costeCl: 0, tin: 10.95, minImp: 960, maxImp: 3000 },
    { fin: "Ventajon · CaixaBank", oferta: "Tarjeta NLH", tipo: "con", plazo: 60, comAp: 0, costeCl: 0, tin: 10.95, minImp: 1200, maxImp: 3000 },

    // VENTAJON · CaixaBank — PRÉSTAMO (max 30.000€, comApFinanciado:true = apertura en cuotas)
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 3, comAp: 2.00, costeCl: 0.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 6, comAp: 2.50, costeCl: 0.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 12, comAp: 4.00, costeCl: 0.00, tin: 0, minImp: 200, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 18, comAp: 5.50, costeCl: 0.00, tin: 0, minImp: 240, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 24, comAp: 7.00, costeCl: 0.00, tin: 0, minImp: 360, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 30, comAp: 9.50, costeCl: 0.00, tin: 0, minImp: 480, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 36, comAp: 10.50, costeCl: 0.00, tin: 0, minImp: 720, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRX — 100% cliente", tipo: "sin", plazo: 48, comAp: 12.50, costeCl: 0.00, tin: 0, minImp: 960, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 3, comAp: 0.00, costeCl: 2.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 6, comAp: 0.00, costeCl: 2.50, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 12, comAp: 0.00, costeCl: 4.00, tin: 0, minImp: 200, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 18, comAp: 0.00, costeCl: 5.50, tin: 0, minImp: 240, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 24, comAp: 0.00, costeCl: 7.00, tin: 0, minImp: 360, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 30, comAp: 0.00, costeCl: 9.50, tin: 0, minImp: 480, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 36, comAp: 0.00, costeCl: 10.50, tin: 0, minImp: 720, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRY — 0% cliente", tipo: "sin", plazo: 48, comAp: 0.00, costeCl: 12.50, tin: 0, minImp: 960, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 3, comAp: 1.00, costeCl: 1.00, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 6, comAp: 1.25, costeCl: 1.25, tin: 0, minImp: 150, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 12, comAp: 2.00, costeCl: 2.00, tin: 0, minImp: 200, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 18, comAp: 2.75, costeCl: 2.75, tin: 0, minImp: 240, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 24, comAp: 3.50, costeCl: 3.50, tin: 0, minImp: 360, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 30, comAp: 4.75, costeCl: 4.75, tin: 0, minImp: 480, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 36, comAp: 5.25, costeCl: 5.25, tin: 0, minImp: 720, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRW — Compartido", tipo: "sin", plazo: 48, comAp: 6.25, costeCl: 6.25, tin: 0, minImp: 960, maxImp: 30000, comApFinanciado: true },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 12, comAp: 0, costeCl: 0, tin: 10.95, minImp: 240, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 18, comAp: 0, costeCl: 0, tin: 10.95, minImp: 360, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 24, comAp: 0, costeCl: 0, tin: 10.95, minImp: 480, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 30, comAp: 0, costeCl: 0, tin: 10.95, minImp: 600, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 36, comAp: 0, costeCl: 0, tin: 10.95, minImp: 720, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 42, comAp: 0, costeCl: 0, tin: 10.95, minImp: 840, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 48, comAp: 0, costeCl: 0, tin: 10.95, minImp: 960, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 54, comAp: 0, costeCl: 0, tin: 10.95, minImp: 1080, maxImp: 30000 },
    { fin: "Ventajon · CaixaBank", oferta: "Préstamo NRV", tipo: "con", plazo: 60, comAp: 0, costeCl: 0, tin: 10.95, minImp: 1200, maxImp: 30000 },
 */
    { fin: "Kutxabank", oferta: "Tarifa estándar", tipo: "sin", plazo: 3, comAp: 1.00, costeCl: 0, tin: 0, comApFinanciado: false },
    { fin: "Kutxabank", oferta: "Tarifa estándar", tipo: "sin", plazo: 6, comAp: 1.50, costeCl: 0, tin: 0, comApFinanciado: false },
    { fin: "Kutxabank", oferta: "Tarifa estándar", tipo: "sin", plazo: 9, comAp: 2.00, costeCl: 0, tin: 0, comApFinanciado: false },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 9, comAp: 1.75, costeCl: 0.29, tin: 0, comApFinanciado: false },
    { fin: "Kutxabank", oferta: "Tarifa estándar", tipo: "sin", plazo: 12, comAp: 2.50, costeCl: 0, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 12, comAp: 2.00, costeCl: 0.27, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa estándar", tipo: "sin", plazo: 18, comAp: 3.50, costeCl: 0, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 18, comAp: 2.25, costeCl: 0.98, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa estándar", tipo: "sin", plazo: 24, comAp: 4.50, costeCl: 0, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 24, comAp: 3.25, costeCl: 1.29, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 30, comAp: 3.25, costeCl: 1.60, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 36, comAp: 3.25, costeCl: 1.90, tin: 0, comApFinanciado: true },
    { fin: "Kutxabank", oferta: "Tarifa bonificada", tipo: "sin", plazo: 48, comAp: 4.00, costeCl: 2.51, tin: 0, comApFinanciado: true },

    // SANTANDER CONSUMER — Sin intereses TIN 0%
    // Grupo 1: 100% coste clínica, 0% cliente
    { fin: "Santander", oferta: "Tarifa estándar", tipo: "sin", plazo: 12, comAp: 0, costeCl: 4.66, tin: 0, minImp: 360, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa estándar", tipo: "sin", plazo: 18, comAp: 0, costeCl: 6.71, tin: 0, minImp: 540, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa estándar", tipo: "sin", plazo: 24, comAp: 0, costeCl: 8.70, tin: 0, minImp: 720, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa estándar", tipo: "sin", plazo: 36, comAp: 0, costeCl: 12.52, tin: 0, minImp: 1080, comApFinanciado: true },

    // Grupo 2: coste compartido clínica + cliente
    { fin: "Santander", oferta: "Tarifa bonificada", tipo: "sin", plazo: 12, comAp: 2.66, costeCl: 2.00, tin: 0, minImp: 360, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa bonificada", tipo: "sin", plazo: 18, comAp: 3.71, costeCl: 3.00, tin: 0, minImp: 540, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa bonificada", tipo: "sin", plazo: 24, comAp: 5.70, costeCl: 3.00, tin: 0, minImp: 720, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa bonificada", tipo: "sin", plazo: 36, comAp: 7.52, costeCl: 5.00, tin: 0, minImp: 1080, comApFinanciado: true },

    // Grupo 3: 0% coste clínica, 100% cliente
    { fin: "Santander", oferta: "Tarifa cliente", tipo: "sin", plazo: 12, comAp: 4.40, costeCl: 0.26, tin: 0, minImp: 360, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa cliente", tipo: "sin", plazo: 18, comAp: 6.71, costeCl: 0, tin: 0, minImp: 540, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa cliente", tipo: "sin", plazo: 24, comAp: 8.70, costeCl: 0, tin: 0, minImp: 720, comApFinanciado: true },
    { fin: "Santander", oferta: "Tarifa cliente", tipo: "sin", plazo: 36, comAp: 9.00, costeCl: 3.52, tin: 0, minImp: 1080, comApFinanciado: true },

    // Con intereses — código 6CK: TIN 9.00%, 0% gastos cliente, hasta 18 meses
    { fin: "Santander", oferta: "Con intereses (6CK)", tipo: "con", plazo: 6, comAp: 0, costeCl: 0, tin: 9.00, minImp: 360, comApFinanciado: true },
    { fin: "Santander", oferta: "Con intereses (6CK)", tipo: "con", plazo: 10, comAp: 0, costeCl: 0, tin: 9.00, minImp: 360, comApFinanciado: true },
    { fin: "Santander", oferta: "Con intereses (6CK)", tipo: "con", plazo: 12, comAp: 0, costeCl: 0, tin: 9.00, minImp: 360, comApFinanciado: true },
    { fin: "Santander", oferta: "Con intereses (6CK)", tipo: "con", plazo: 18, comAp: 0, costeCl: 0, tin: 9.00, minImp: 540, comApFinanciado: true },

    // Con intereses — código 5PA: TIN 9.99%, 2% gastos cliente financiados, >18 meses
    { fin: "Santander", oferta: "Con intereses (5PA)", tipo: "con", plazo: 24, comAp: 2, costeCl: 0, tin: 9.99, minImp: 720, comApFinanciado: true },
    { fin: "Santander", oferta: "Con intereses (5PA)", tipo: "con", plazo: 36, comAp: 2, costeCl: 0, tin: 9.99, minImp: 1080, comApFinanciado: true },
    { fin: "Santander", oferta: "Con intereses (5PA)", tipo: "con", plazo: 48, comAp: 2, costeCl: 0, tin: 9.99, minImp: 1080, comApFinanciado: true },
    { fin: "Santander", oferta: "Con intereses (5PA)", tipo: "con", plazo: 60, comAp: 2, costeCl: 0, tin: 9.99, minImp: 1080, comApFinanciado: true },

    // ─────────────────────────────────────────────────────────────────
    // PEPPER
    // Com. Apert (%) → comAp (gastos cliente, financiado en cuotas)
    // Descuento (%)  → costeCl (coste clínica, financiado en cuotas)
    // Todos: comApFinanciado: true, tin: 0 (salvo los mixtos/intereses)
    // ─────────────────────────────────────────────────────────────────

    // EXPRÉS GASTOS COMPARTIDOS (B402027) — 150€ a 4.000€
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 3, comAp: 3, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 6, comAp: 3, costeCl: 1, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 9, comAp: 3, costeCl: 1.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 12, comAp: 3, costeCl: 2.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 15, comAp: 4, costeCl: 3.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 18, comAp: 4, costeCl: 4.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 20, comAp: 4, costeCl: 5.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 24, comAp: 4.5, costeCl: 6.3, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 30, comAp: 7.5, costeCl: 6.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gastos Compartidos", tipo: "sin", plazo: 36, comAp: 8.5, costeCl: 8.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },

    // EXPRÉS GASTO CLÍNICA (B402460) — 150€ a 4.000€
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 3, comAp: 0, costeCl: 3, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 6, comAp: 0, costeCl: 3.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 9, comAp: 0, costeCl: 4.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 12, comAp: 0, costeCl: 5.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 15, comAp: 0, costeCl: 7.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 18, comAp: 0, costeCl: 8.5, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 20, comAp: 0, costeCl: 9, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 24, comAp: 0, costeCl: 10.25, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 30, comAp: 0, costeCl: 12.75, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Clínica", tipo: "sin", plazo: 36, comAp: 0, costeCl: 15, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },

    // EXPRESS GASTO CLIENTE (B402498) — 150€ a 4.000€
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 3, comAp: 3, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 9, comAp: 4.5, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 12, comAp: 5.75, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 15, comAp: 8, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 18, comAp: 9.5, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 20, comAp: 9, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 24, comAp: 11.5, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 30, comAp: 15, costeCl: 0, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Exprés Gasto Cliente", tipo: "sin", plazo: 36, comAp: 17, costeCl: 0.75, tin: 0, minImp: 150, maxImp: 4000, comApFinanciado: true },

    // PLUS GRATUITO 12-60 CLIENTE CA FINANCIAD (B701026) — 6.000€ a 10.000€
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 12, comAp: 3.85, costeCl: 2.4, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 18, comAp: 6.5, costeCl: 2.9, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 24, comAp: 6.75, costeCl: 5.2, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 30, comAp: 9, costeCl: 5.7, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 36, comAp: 10.5, costeCl: 7.1, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 48, comAp: 13, costeCl: 9.8, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 12-60 Cliente CA", tipo: "sin", plazo: 60, comAp: 13.75, costeCl: 13.8, tin: 0, minImp: 6000, maxImp: 10000, comApFinanciado: true },

    // PLUS GRATUITO 6-36 M CON CA (B701049) — 5.000€ a 10.000€
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 6, comAp: 3.5, costeCl: 0, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 9, comAp: 5, costeCl: 0, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 12, comAp: 6.5, costeCl: 0, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 18, comAp: 9.5, costeCl: 0, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 24, comAp: 12.5, costeCl: 0, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 30, comAp: 16, costeCl: 0, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Plus Gratuito 6-36 Con CA", tipo: "sin", plazo: 36, comAp: 17, costeCl: 1.5, tin: 0, minImp: 5000, maxImp: 10000, comApFinanciado: true },

    // PLUS INTERÉS TIN 11.95% (B702003) — 6.000€ a 10.000€
    { fin: "Pepper", oferta: "Plus Interés TIN 11.95%", tipo: "con", plazo: 3, comAp: 0, costeCl: 0, tin: 11.95, minImp: 6000, maxImp: 10000 },

    // PLUS VIP 9.95% TIN (B702034) — 6.000€ a 10.000€
    { fin: "Pepper", oferta: "Plus VIP TIN 9.95%", tipo: "con", plazo: 3, comAp: 3, costeCl: 0, tin: 9.95, minImp: 6000, maxImp: 10000, comApFinanciado: true },

    // PLUS MIXTO TIN 8.5% (B703004) — descuento = costeCl, 6.000€ a 10.000€
    { fin: "Pepper", oferta: "Plus Mixto TIN 8.5%", tipo: "con", plazo: 24, comAp: 0, costeCl: 3.56, tin: 8.5, minImp: 6000, maxImp: 10000 },
    { fin: "Pepper", oferta: "Plus Mixto TIN 8.5%", tipo: "con", plazo: 36, comAp: 0, costeCl: 5.2, tin: 8.5, minImp: 6000, maxImp: 10000 },
    { fin: "Pepper", oferta: "Plus Mixto TIN 8.5%", tipo: "con", plazo: 48, comAp: 0, costeCl: 7, tin: 8.5, minImp: 6000, maxImp: 10000 },
    { fin: "Pepper", oferta: "Plus Mixto TIN 8.5%", tipo: "con", plazo: 60, comAp: 0, costeCl: 7.5, tin: 8.5, minImp: 6000, maxImp: 10000 },

    // CLASSIC INTERÉS TIN 11.95% (CT01016) — 4.000€ a 6.000€
    { fin: "Pepper", oferta: "Classic Interés TIN 11.95%", tipo: "con", plazo: 3, comAp: 0, costeCl: 0, tin: 11.95, minImp: 4000, maxImp: 6000 },

    // INTERÉS TIN 11.95% (CT01019) — 4.000€ a 6.000€
    { fin: "Pepper", oferta: "Interés TIN 11.95%", tipo: "con", plazo: 3, comAp: 0, costeCl: 0, tin: 11.95, minImp: 4000, maxImp: 6000 },

    // CLASSIC GRATUITO C.A. DE 12 A 36 ME (CT02I10) — 4.000€ a 6.000€
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 12, comAp: 5, costeCl: 2, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 15, comAp: 5, costeCl: 3, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 18, comAp: 6, costeCl: 3.1, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 19, comAp: 5, costeCl: 3.1, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 20, comAp: 6.5, costeCl: 3.9, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 24, comAp: 6.5, costeCl: 5.3, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 30, comAp: 7.5, costeCl: 7.3, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 12-36", tipo: "sin", plazo: 36, comAp: 8, costeCl: 9.2, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },

    // CLASSIC GRATUITO C.A. 24 A 36 M (CT02I14) — 4.000€ a 6.000€
    { fin: "Pepper", oferta: "Classic Gratuito CA 24-36", tipo: "sin", plazo: 24, comAp: 8.5, costeCl: 3.5, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 24-36", tipo: "sin", plazo: 30, comAp: 9.5, costeCl: 5.5, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito CA 24-36", tipo: "sin", plazo: 36, comAp: 10, costeCl: 7.4, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },

    // CLASSIC GRATUITO MAX. C.A. 3 A 36 (CT02I15) — 4.000€ a 6.000€
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 3, comAp: 3, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 6, comAp: 4.5, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 9, comAp: 5.5, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 12, comAp: 6.5, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 15, comAp: 8, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 18, comAp: 9.5, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 20, comAp: 9, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 24, comAp: 11.75, costeCl: 0.8, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 30, comAp: 14, costeCl: 3, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Máx CA 3-36", tipo: "sin", plazo: 36, comAp: 14, costeCl: 5, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },

    // CLASSIC GRATUITO 3 A 36 MESES (CT02I16) — 4.000€ a 6.000€
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 3, comAp: 3, costeCl: 0, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 6, comAp: 3, costeCl: 1.4, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 9, comAp: 3, costeCl: 2.7, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 12, comAp: 3, costeCl: 3.9, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 15, comAp: 4.5, costeCl: 5.7, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 18, comAp: 4, costeCl: 5.7, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 24, comAp: 4.5, costeCl: 7.1, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 30, comAp: 5.5, costeCl: 9.1, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito 3-36 Meses", tipo: "sin", plazo: 36, comAp: 5.75, costeCl: 11, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },

    // CLASSIC GRATUITO SIN C.A. 3 A 36 M (CT02I17) — sin comAp, solo descuento clínica
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 3, comAp: 0, costeCl: 3.5, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 6, comAp: 0, costeCl: 4.6, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 9, comAp: 0, costeCl: 5.7, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 12, comAp: 0, costeCl: 6.8, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 15, comAp: 0, costeCl: 7.8, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 18, comAp: 0, costeCl: 8.8, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 20, comAp: 0, costeCl: 9.5, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 24, comAp: 0, costeCl: 10.8, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 30, comAp: 0, costeCl: 13.5, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },
    { fin: "Pepper", oferta: "Classic Gratuito Sin CA 3-36", tipo: "sin", plazo: 36, comAp: 0, costeCl: 15.7, tin: 0, minImp: 4000, maxImp: 6000, comApFinanciado: true },

    // CLASSIC MIXTO TIN 7.5% (CT03156) — descuento = costeCl, 4.001€ a 6.000€
    { fin: "Pepper", oferta: "Classic Mixto TIN 7.5%", tipo: "con", plazo: 12, comAp: 0, costeCl: 2.4, tin: 7.5, minImp: 4001, maxImp: 6000 },
    { fin: "Pepper", oferta: "Classic Mixto TIN 7.5%", tipo: "con", plazo: 18, comAp: 0, costeCl: 3.48, tin: 7.5, minImp: 4001, maxImp: 6000 },
    { fin: "Pepper", oferta: "Classic Mixto TIN 7.5%", tipo: "con", plazo: 24, comAp: 0, costeCl: 4.54, tin: 7.5, minImp: 4001, maxImp: 6000 },
    { fin: "Pepper", oferta: "Classic Mixto TIN 7.5%", tipo: "con", plazo: 36, comAp: 0, costeCl: 6.62, tin: 7.5, minImp: 4001, maxImp: 6000 },
    { fin: "Pepper", oferta: "Classic Mixto TIN 7.5%", tipo: "con", plazo: 48, comAp: 0, costeCl: 8.64, tin: 7.5, minImp: 4001, maxImp: 6000 },
    { fin: "Pepper", oferta: "Classic Mixto TIN 7.5%", tipo: "con", plazo: 60, comAp: 0, costeCl: 9.92, tin: 7.5, minImp: 4001, maxImp: 6000 },

];