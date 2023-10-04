
project_name: "Embed_Tabbed_Dashboards"

application: Tabbed_Dashboards {
  label: "Tabbed_Dashboards React/TypeScript extension"
  url: "https://localhost:8080/bundle.js"
  # file: "bundle.js
  entitlements: {
    core_api_methods: ["me"] #Add more entitlements here as you develop new functionality
  }
}