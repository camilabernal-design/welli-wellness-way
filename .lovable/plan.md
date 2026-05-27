## Plan: Plataforma Clínica Bariátrica (Welli + Novo Nordisk)

Nueva sección independiente en `/bariatrica-novo`, optimizada para proyección en TV durante sesiones presenciales facilitadas por CS.

### Arquitectura

**Router (`src/App.tsx`)**: agregar 3 rutas nuevas sin tocar las existentes:
- `/bariatrica-novo` → Landing
- `/bariatrica-novo/sesion-1` → Sesión 1 (24 pantallas)
- `/bariatrica-novo/sesion-2` → Sesión 2 (21 pantallas)

**Patrón de cada sesión**: un solo componente padre que mantiene un índice de pantalla en `useState`, renderiza el componente activo, y controla navegación con `Continuar`/`Atrás` (y teclas ←/→). Barra de progreso superior. Esto evita 45 archivos de rutas anidadas y mantiene la transición suave (fade 200ms).

**Estado persistente**: hook `useBariatricaState()` que guarda en `localStorage` bajo `bariatrica-novo-state`:
- respuestas 1.2, 1.3, 2.0.2
- fecha/formato C1.2
- compromiso 8.2 + día seguimiento 8.3

### Estructura de archivos

```text
src/
├── pages/BariatricaNovo/
│   ├── Landing.tsx
│   ├── Sesion1.tsx          (controlador secuencial 24 pantallas)
│   └── Sesion2.tsx          (controlador secuencial 21 pantallas)
├── components/BariatricaNovo/
│   ├── NavigationButtons.tsx
│   ├── ProgressBar.tsx
│   ├── HighlightBox.tsx     (amarilla)
│   ├── WarningBox.tsx       (roja)
│   ├── PracticeBox.tsx      (verde)
│   ├── NovoHeader.tsx       (logo discreto + "En colaboración con")
│   ├── ScreenShell.tsx      (layout común: padding, max-w, fade)
│   └── screens/
│       ├── sesion1/         (S1_01_Bienvenida.tsx ... S1_24_ProximaSesion.tsx)
│       └── sesion2/         (S2_01_Bienvenida.tsx ... S2_21_ProximosPasos.tsx)
└── hooks/useBariatricaState.ts
```

Cada pantalla es un componente que recibe `{ onNext, onBack, state, setState }`. Pantallas con interacción (1.2, 1.3, 2.0.2, 5.3 tabs, 7.1 bifurcación, 8.2, C1.2) manejan su propio estado interno + persistencia.

### Diseño visual

Reuso el sistema de tokens existente (Tailwind + welli-yellow/indigo-950). Tipografía agrandada para TV: H1 56px, H2 40px, body 24px, frases ancla 32px italic. Padding generoso (p-12 a p-20), max-w-5xl, border-radius 12-16px.

Componentes de caja:
- `HighlightBox`: bg `welli-yellow/30` con borde
- `WarningBox`: bg rojo suave con borde rojo
- `PracticeBox`: bg verde suave con borde verde

`NovoHeader` solo se renderiza en las pantallas marcadas (2.7, 3.4, 4.2, 4.3, 4.4, 6.5).

### Pantallas con lógica especial

- **1.2**: 4 botones de rango → guarda respuesta → muestra mensaje personalizado por 4s → autoavanza a 1.3.
- **1.3**: 3 single-choice; botón Continuar deshabilitado hasta que las 3 respondan.
- **5.3**: tabs horizontales con 5 conversaciones (excusa social vs razón real).
- **7.1**: bifurcación: dos botones que saltan al subárbol A (7.2A→7.3A→Módulo 8) o B (7.2B→7.3B→Módulo 8). En el controlador de Sesión 2 mantengo un `branch: 'A'|'B'|null` y enrute las pantallas 17-18 según rama.
- **8.2**: input nombre + fecha; al confirmar guarda en localStorage y avanza.
- **C1.2**: input fecha/hora + 3 botones formato; persiste.

### Restricciones cumplidas

- "Welli" con i en todo.
- Sin emojis.
- Logo Novo solo en las 6 pantallas marcadas.
- Sin notas internas para Mariana en pantallas — son 100% cara visible al doctor.
- Testimoniales 2.10 como placeholders explícitos.
- "Usted explica. Welli organiza." solo en 3.5.
- Comisión 4% fijo.
- Sin cambios a rutas, hub o módulos existentes.

### Volumen

~45 componentes de pantalla + 8 compartidos + 3 páginas + 1 hook + 1 edit a `App.tsx`. Se crearán en paralelo por bloques.

### Verificación post-build

1. `/bariatrica-novo` carga landing con 2 tarjetas.
2. Cada sesión navega secuencialmente con Continuar/Atrás y flechas.
3. Logo Novo solo aparece en las 6 pantallas marcadas.
4. Respuestas 1.2/1.3/8.2 persisten en localStorage tras refresh.
5. Bifurcación 7.1 lleva a la rama correcta.
6. Rutas existentes (Hub, Express, Farmer, Hunter, Aliado, Maestría) intactas.
