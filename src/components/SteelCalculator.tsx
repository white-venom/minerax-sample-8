import { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

const alloys = [
  { id: 'carbon', name: 'Carbon Steel A106 Grade B', density: 7850, yield: '240 MPa', tensile: '415 MPa' },
  { id: 'stainless', name: 'Stainless Steel 316L', density: 8000, yield: '290 MPa', tensile: '580 MPa' },
  { id: 'chromemoly', name: 'Chrome-Moly Alloy (P91)', density: 7850, yield: '415 MPa', tensile: '585 MPa' },
  { id: 'nickel', name: 'Inconel 625 Superalloy', density: 8440, yield: '460 MPa', tensile: '930 MPa' },
];

export default function SteelCalculator() {
  const [selectedType, setSelectedType] = useState<'pipe' | 'plate' | 'bar'>('pipe');
  const [selectedAlloy, setSelectedAlloy] = useState(alloys[0].id);

  // Pipe Inputs
  const [outerDiameter, setOuterDiameter] = useState(323.8); // mm (12 inch)
  const [wallThickness, setWallThickness] = useState(12.7); // mm
  const [length, setLength] = useState(12); // meters

  // Plate Inputs
  const [plateLength, setPlateLength] = useState(6); // meters
  const [plateWidth, setPlateWidth] = useState(2.4); // meters
  const [plateThickness, setPlateThickness] = useState(25); // mm

  // Bar Inputs
  const [barDiameter, setBarDiameter] = useState(150); // mm
  const [barLength, setBarLength] = useState(6); // meters

  const activeAlloy = useMemo(() => alloys.find((a) => a.id === selectedAlloy) || alloys[0], [selectedAlloy]);

  // Weight Calculation
  const weightKg = useMemo(() => {
    const rho = activeAlloy.density; // kg/m³
    if (selectedType === 'pipe') {
      const od = outerDiameter / 1000; // m
      const wt = wallThickness / 1000; // m
      const id = od - 2 * wt;
      if (id <= 0) return 0;
      const volume = Math.PI * ((od / 2) ** 2 - (id / 2) ** 2) * length;
      return volume * rho;
    } else if (selectedType === 'plate') {
      const t = plateThickness / 1000; // m
      const volume = plateLength * plateWidth * t;
      return volume * rho;
    } else {
      const d = barDiameter / 1000; // m
      const volume = Math.PI * (d / 2) ** 2 * barLength;
      return volume * rho;
    }
  }, [selectedType, activeAlloy, outerDiameter, wallThickness, length, plateLength, plateWidth, plateThickness, barDiameter, barLength]);

  const weightTons = (weightKg / 1000).toFixed(3);
  const weightLbs = (weightKg * 2.20462).toFixed(1);

  return (
    <section id="calculator" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">
            <Calculator className="w-4 h-4" />
            Engineering Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Industrial Material & Weight Estimator
          </h2>
          <p className="text-slate-600 text-lg font-light">
            Calculate precise volumetric weights, tensile ratings, and alloy specs for custom mill orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-slate-200 p-6 md:p-8">
            {/* Component Type Selector */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Component Profile
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'pipe', label: 'Seamless Pipe' },
                  { id: 'plate', label: 'Heavy Plate' },
                  { id: 'bar', label: 'Solid Bar / Shaft' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id as any)}
                    className={`py-3 px-4 rounded-md font-bold text-xs uppercase tracking-wider transition-all border ${
                      selectedType === type.id
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Alloy Selection */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. Select Alloy Metallurgy
              </label>
              <select
                value={selectedAlloy}
                onChange={(e) => setSelectedAlloy(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-md p-3.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {alloys.map((alloy) => (
                  <option key={alloy.id} value={alloy.id}>
                    {alloy.name} ({alloy.density} kg/m³)
                  </option>
                ))}
              </select>
            </div>

            {/* Dimensional Sliders & Inputs */}
            <div className="space-y-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                3. Input Dimensions
              </label>

              {selectedType === 'pipe' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Outer Diameter (OD):</span>
                      <span className="text-amber-600">{outerDiameter} mm</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1200"
                      step="5"
                      value={outerDiameter}
                      onChange={(e) => setOuterDiameter(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Wall Thickness (WT):</span>
                      <span className="text-amber-600">{wallThickness} mm</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="80"
                      step="0.5"
                      value={wallThickness}
                      onChange={(e) => setWallThickness(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Length:</span>
                      <span className="text-amber-600">{length} meters</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="0.5"
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                </>
              )}

              {selectedType === 'plate' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Plate Length:</span>
                      <span className="text-amber-600">{plateLength} meters</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="18"
                      step="0.5"
                      value={plateLength}
                      onChange={(e) => setPlateLength(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Plate Width:</span>
                      <span className="text-amber-600">{plateWidth} meters</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="4.5"
                      step="0.1"
                      value={plateWidth}
                      onChange={(e) => setPlateWidth(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Plate Thickness:</span>
                      <span className="text-amber-600">{plateThickness} mm</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="150"
                      step="1"
                      value={plateThickness}
                      onChange={(e) => setPlateThickness(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                </>
              )}

              {selectedType === 'bar' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Shaft Diameter:</span>
                      <span className="text-amber-600">{barDiameter} mm</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="600"
                      step="5"
                      value={barDiameter}
                      onChange={(e) => setBarDiameter(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Length:</span>
                      <span className="text-amber-600">{barLength} meters</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="18"
                      step="0.5"
                      value={barLength}
                      onChange={(e) => setBarLength(Number(e.target.value))}
                      className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl shadow-xl p-6 md:p-8 border border-slate-800 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                Calculation Output
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
                Standard ISO 6892
              </span>
            </div>

            <div className="mb-8">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Estimated Net Weight
              </div>
              <div className="text-5xl font-black text-white tracking-tight mb-1">
                {weightTons} <span className="text-2xl text-amber-500 font-bold">MT</span>
              </div>
              <div className="text-slate-400 text-sm font-light">
                Approx. {weightLbs} lbs
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase">Yield Strength</div>
                <div className="text-lg font-bold text-white mt-1">{activeAlloy.yield}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase">Tensile Strength</div>
                <div className="text-lg font-bold text-white mt-1">{activeAlloy.tensile}</div>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-300 mb-8 border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Mill Test Certificate (EN 10204 3.1) included</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Ultrasonic & Hydrostatic Non-Destructive Tested</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="w-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold uppercase tracking-wider py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20"
            >
              Request RFQ with Specs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
