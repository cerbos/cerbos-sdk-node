<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [InspectedConstant](./core.inspectedconstant.md)

## InspectedConstant interface

Details of a [constant](https://docs.cerbos.dev/cerbos/latest/policies/variables#constants) referenced by a policy.

**Signature:**

```typescript
export interface InspectedConstant 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[kind](./core.inspectedconstant.kind.md)


</td><td>


</td><td>

[InspectedConstantKind](./core.inspectedconstantkind.md)


</td><td>

Kind of the constant.


</td></tr>
<tr><td>

[name](./core.inspectedconstant.name.md)


</td><td>


</td><td>

string


</td><td>

Name of the constant.


</td></tr>
<tr><td>

[source](./core.inspectedconstant.source.md)


</td><td>


</td><td>

string \| undefined


</td><td>

Source of the constant, if it was imported.


</td></tr>
<tr><td>

[used](./core.inspectedconstant.used.md)


</td><td>


</td><td>

boolean


</td><td>

Whether the constant is used in a policy condition.


</td></tr>
<tr><td>

[value](./core.inspectedconstant.value.md)


</td><td>


</td><td>

[Value](./core.value.md) \| undefined


</td><td>

Value of the constant, if known.


</td></tr>
</tbody></table>