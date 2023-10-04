import React from "react";
import { ComponentsProvider, Tabs2, Tab2 } from "@looker/components";
import { EmbeddedDashboard1, EmbeddedDashboard2, EmbeddedDashboard3, EmbeddedDashboard4, EmbeddedDashboard5
} from "./Dashboards";

/** Id is the unique number for each dashboard that can be found in the dashboard url . */

export const Tabs = () => (
 <ComponentsProvider>
   <Tabs2>
     <Tab2 id="109" label="▶dashboard_label">   
       <EmbeddedDashboard1 id={109} />
     </Tab2>
     <Tab2 id="110" label="└▶dashboard_label">
       <EmbeddedDashboard2 id={110} />
     </Tab2>
     <Tab2 id="111" label="└─▶dashboard_label">
       <EmbeddedDashboard3 id={111} />
     </Tab2>
     <Tab2 id="121" label="└──▶dashboard_label">
       <EmbeddedDashboard4 id={121} />
     </Tab2>
     <Tab2 id="122" label="└───▶dashboard_label">
       <EmbeddedDashboard5 id={122} />
     </Tab2>
   </Tabs2>
 </ComponentsProvider>
)