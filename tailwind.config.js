/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ============================================================ //
      // ACCESSIBLE COLOR PALETTE (WCAG 2.1 AA Compliant)             //
      // ============================================================ //
      colors: {
        // --- PRIMARY TEXT (Highest Contrast) ---
        'text-primary': '#1A1A1A',      // Almost black - for ALL body text
        'text-secondary': '#2D2D2D',    // Dark grey - for subheadings
        'text-muted': '#4A4A4A',        // Medium grey - for hints (still meets 4.5:1 ratio)
        
        // --- BACKGROUNDS ---
        'bg-white': '#FFFFFF',          // White - safe background
        'bg-light': '#F8F9FA',          // Off-white - safe background
        'bg-dark': '#0A0A0A',           // Almost black - for hero sections
        
        // --- BRAND COLORS ---
        'gold': '#C9A84C',              // Primary brand color
        'gold-light': '#E8D5A3',        // Light gold - use sparingly
        'gold-dark': '#B8953A',         // Dark gold - for hover states
        
        // --- LINKS & BUTTONS ---
        'link': '#0056B3',              // Dark blue - meets contrast on white
        'link-hover': '#003D80',        // Darker blue for hover
        
        // --- FORMS ---
        'input-border': '#6C757D',      // Medium grey border
        'input-focus': '#0056B3',       // Blue focus ring
        'input-error': '#D32F2F',       // Red for errors - high contrast
        
        // --- SUCCESS / WARNING ---
        'success': '#2E7D32',           // Dark green - accessible
        'warning': '#E65100',           // Dark orange - accessible
      },
      
      // ============================================================ //
      // TYPOGRAPHY SCALE                                              //
      // ============================================================ //
      fontSize: {
        'xs': '0.75rem',     // 12px - Minimum for small text
        'sm': '0.875rem',    // 14px - Minimum for captions/hints
        'base': '1rem',      // 16px - Default body text
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
      },
      
      // ============================================================ //
      // LINE HEIGHT (Improves Readability)                            //
      // ============================================================ //
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      
      // ============================================================ //
      // SPACING (Consistent Design Tokens)                            //
      // ============================================================ //
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      
      // ============================================================ //
      // ANIMATIONS (Your existing scroll animation)                   //
      // ============================================================ //
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        // ========================================================== //
        // ADD THESE ACCESSIBILITY-FRIENDLY ANIMATIONS                //
        // ========================================================== //
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      
      animation: {
        scroll: "scroll 25s linear infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        pulse: "pulse 2s ease-in-out infinite",
      },
      
      // ============================================================ //
      // BOX SHADOWS (Consistent depth)                                //
      // ============================================================ //
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'default': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
      },
      
      // ============================================================ //
      // BORDER RADIUS                                                 //
      // ============================================================ //
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'default': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}