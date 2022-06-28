---
inject: true
to: src/store/reducers.ts
after: import { combineReducers } from "@reduxjs/toolkit";
---

import <%= name %> from "./<%= name %>/slice";
