// vite.config.ts
import { defineConfig } from "file:///Users/novinnoori/novin-show/apps/header/node_modules/vite/dist/node/index.js";
import react from "file:///Users/novinnoori/novin-show/apps/header/node_modules/@vitejs/plugin-react-swc/index.mjs";
import federation from "file:///Users/novinnoori/novin-show/apps/header/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header"
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    cssCodeSplit: false,
    minify: false,
    modulePreload: false,
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbm92aW5ub29yaS9ub3Zpbi1zaG93L2FwcHMvaGVhZGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbm92aW5ub29yaS9ub3Zpbi1zaG93L2FwcHMvaGVhZGVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ub3Zpbm5vb3JpL25vdmluLXNob3cvYXBwcy9oZWFkZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiAnaGVhZGVyJyxcbiAgICAgIGZpbGVuYW1lOiAncmVtb3RlRW50cnkuanMnLFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICAnLi9IZWFkZXInOiAnLi9zcmMvY29tcG9uZW50cy9IZWFkZXInLFxuICAgICAgfSxcbiAgICAgIHNoYXJlZDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgbW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLG9CQUFvQjtBQUN2VSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFHdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxJQUMvQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
