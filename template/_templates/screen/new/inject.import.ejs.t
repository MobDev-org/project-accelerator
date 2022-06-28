---
inject: true
to: src/router/<%= location %>/index.tsx
after: import { createStackNavigator } from "@react-navigation/stack";
---

import <%= h.capitalize(name) %> from "screens/<%= location %>/<%= h.capitalize(name) %>";
