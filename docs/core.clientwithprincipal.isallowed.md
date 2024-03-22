<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [ClientWithPrincipal](./core.clientwithprincipal.md) &gt; [isAllowed](./core.clientwithprincipal.isallowed.md)

## ClientWithPrincipal.isAllowed() method

Check if the principal is allowed to perform an action on a resource. See [Client.isAllowed()](./core.client.isallowed.md) for details.

**Signature:**

```typescript
isAllowed(request: Omit<IsAllowedRequest, "principal">, options?: RequestOptions): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

request


</td><td>

Omit&lt;[IsAllowedRequest](./core.isallowedrequest.md)<!-- -->, "principal"&gt;


</td><td>


</td></tr>
<tr><td>

options


</td><td>

[RequestOptions](./core.requestoptions.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
**Returns:**

Promise&lt;boolean&gt;
