# Dependency & Architecture Decisions

> **Context for Future AI**: This document outlines the critical technical decisions and dependency choices made for the Elinity project (Web & Mobile). Adhere to these constraints to ensure build stability and type safety.

## 1. Core Framework: React 19
**Decision**: Upgrade both Web and Mobile (where applicable/compatible) to **React 19**.

*   **Reasoning**:
    *   **Type Compatibility**: We encountered severe `JSX element type` errors with `lucide-react` and other modern libraries when running on React 18. These libraries have updated their type definitions to align with React 19's `ReactNode` and `FC` changes.
    *   **Future Proofing**: React 19 is the new standard. Sticking to v18 caused "No overload matches this call" and "cannot be used as a JSX component" errors that were unfixable without messy type assertions.

## 2. TypeScript: v5.5+
**Decision**: Enforce **TypeScript 5.5.0** or higher.

*   **Reasoning**:
    *   React 19's type definitions utilize features and syntax that older TypeScript versions (e.g., 5.3) struggle to parse correctly, leading to false-positive compilation errors.
    *   **Rule**: Do not downgrade TypeScript. If you see type errors, first verify the TS version is >= 5.5.

## 3. Styling: NativeWind (Mobile) & Tailwind (Web)
**Decision**: Use a "Shared DNA" approach for styling.

*   **Web**: Standard Tailwind CSS.
*   **Mobile**: NativeWind (v4).
*   **Strategy**:
    *   We treat the Web codebase as the "Source of Truth" for design tokens (colors, spacing).
    *   We manually port web components to mobile by replacing `div` -> `View` and `className` strings.
    *   **Constraint**: Do **not** use CSS Grid on mobile. NativeWind/React Native support for Grid is limited. Convert all grids to **Flexbox Stacks** (`flex-col gap-4`).

## 4. Icons: Lucide React
**Decision**: Use `lucide-react` for Web and `lucide-react-native` for Mobile.

*   **Constraint**:
    *   These libraries are kept in sync visually.
    *   **Strict Typing**: When using icons as props or components, ensure strict type compatibility. If you encounter "is not a valid JSX element" errors, it is almost always a React version mismatch (see Section 1).

## 5. Charts: Platform Specific
**Decision**: Divergent implementation for charts.

*   **Web**: CSS Conic Gradients / HTML-based charts.
*   **Mobile**: `react-native-svg`.
*   **Reasoning**: CSS gradients do not render natively on mobile with the same fidelity or performance. We use `react-native-svg` to rebuild charts from scratch while maintaining the *visual* design of the web version.

---

### Troubleshooting Guide for AI

*   **Problem**: "Type 'Element' is not assignable to type 'ReactNode'"
    *   **Solution**: Check `package.json`. Ensure `react`, `react-dom`, and `@types/react` are all aligned at v19.x.
*   **Problem**: "Property 'className' does not exist on type 'ViewProps'"
    *   **Solution**: Ensure `nativewind-env.d.ts` is present and NativeWind is correctly configured in `babel.config.js`.
*   **Problem**: "Dynamic style type error (string vs DimensionValue)"
    *   **Solution**: React Native is strict about types. Cast dynamic values: `style={{ width: value as DimensionValue }}`.
