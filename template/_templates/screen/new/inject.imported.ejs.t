---
inject: true
to: src/router/<%= location %>/index.tsx
before: </Stack.Group>
---
<Stack.Screen name="<%= h.capitalize(name) %>" component={<%= h.capitalize(name) %>} />
