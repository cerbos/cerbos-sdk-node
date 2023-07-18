/* eslint-disable */
import {
  PlanResourcesInput_Resource,
  Principal,
  Resource,
} from "../../engine/v1/engine";

export const protobufPackage = "cerbos.request.v1";

export interface PlanResourcesRequest {
  requestId: string;
  action: string;
  principal: Principal | undefined;
  resource: PlanResourcesInput_Resource | undefined;
  auxData: AuxData | undefined;
  includeMeta: boolean;
}

export interface CheckResourceSetRequest {
  requestId: string;
  actions: string[];
  principal: Principal | undefined;
  resource: ResourceSet | undefined;
  includeMeta: boolean;
  auxData: AuxData | undefined;
}

export interface ResourceSet {
  kind: string;
  policyVersion: string;
  instances: { [key: string]: AttributesMap };
  scope: string;
}

export interface ResourceSet_InstancesEntry {
  key: string;
  value: AttributesMap | undefined;
}

export interface AttributesMap {
  attr: { [key: string]: any | undefined };
}

export interface AttributesMap_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface CheckResourceBatchRequest {
  requestId: string;
  principal: Principal | undefined;
  resources: CheckResourceBatchRequest_BatchEntry[];
  auxData: AuxData | undefined;
}

export interface CheckResourceBatchRequest_BatchEntry {
  actions: string[];
  resource: Resource | undefined;
}

export interface CheckResourcesRequest {
  requestId: string;
  includeMeta: boolean;
  principal: Principal | undefined;
  resources: CheckResourcesRequest_ResourceEntry[];
  auxData: AuxData | undefined;
}

export interface CheckResourcesRequest_ResourceEntry {
  actions: string[];
  resource: Resource | undefined;
}

export interface AuxData {
  jwt: AuxData_JWT | undefined;
}

export interface AuxData_JWT {
  token: string;
  keySetId: string;
}

export interface ServerInfoRequest {}

export const PlanResourcesRequest = {
  fromJSON(object: any): PlanResourcesRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? PlanResourcesInput_Resource.fromJSON(object.resource)
        : undefined,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
    };
  },

  toJSON(message: PlanResourcesRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.principal !== undefined) {
      obj.principal = Principal.toJSON(message.principal);
    }
    if (message.resource !== undefined) {
      obj.resource = PlanResourcesInput_Resource.toJSON(message.resource);
    }
    if (message.auxData !== undefined) {
      obj.auxData = AuxData.toJSON(message.auxData);
    }
    if (message.includeMeta === true) {
      obj.includeMeta = message.includeMeta;
    }
    return obj;
  },
};

export const CheckResourceSetRequest = {
  fromJSON(object: any): CheckResourceSetRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resource: isSet(object.resource)
        ? ResourceSet.fromJSON(object.resource)
        : undefined,
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckResourceSetRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.actions?.length) {
      obj.actions = message.actions;
    }
    if (message.principal !== undefined) {
      obj.principal = Principal.toJSON(message.principal);
    }
    if (message.resource !== undefined) {
      obj.resource = ResourceSet.toJSON(message.resource);
    }
    if (message.includeMeta === true) {
      obj.includeMeta = message.includeMeta;
    }
    if (message.auxData !== undefined) {
      obj.auxData = AuxData.toJSON(message.auxData);
    }
    return obj;
  },
};

export const ResourceSet = {
  fromJSON(object: any): ResourceSet {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? String(object.policyVersion)
        : "",
      instances: isObject(object.instances)
        ? Object.entries(object.instances).reduce<{
            [key: string]: AttributesMap;
          }>((acc, [key, value]) => {
            acc[key] = AttributesMap.fromJSON(value);
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: ResourceSet): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.policyVersion !== "") {
      obj.policyVersion = message.policyVersion;
    }
    if (message.instances) {
      const entries = Object.entries(message.instances);
      if (entries.length > 0) {
        obj.instances = {};
        entries.forEach(([k, v]) => {
          obj.instances[k] = AttributesMap.toJSON(v);
        });
      }
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    return obj;
  },
};

export const ResourceSet_InstancesEntry = {
  fromJSON(object: any): ResourceSet_InstancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? AttributesMap.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: ResourceSet_InstancesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = AttributesMap.toJSON(message.value);
    }
    return obj;
  },
};

export const AttributesMap = {
  fromJSON(object: any): AttributesMap {
    return {
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: AttributesMap): unknown {
    const obj: any = {};
    if (message.attr) {
      const entries = Object.entries(message.attr);
      if (entries.length > 0) {
        obj.attr = {};
        entries.forEach(([k, v]) => {
          obj.attr[k] = v;
        });
      }
    }
    return obj;
  },
};

export const AttributesMap_AttrEntry = {
  fromJSON(object: any): AttributesMap_AttrEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: AttributesMap_AttrEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const CheckResourceBatchRequest = {
  fromJSON(object: any): CheckResourceBatchRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) =>
            CheckResourceBatchRequest_BatchEntry.fromJSON(e),
          )
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckResourceBatchRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.principal !== undefined) {
      obj.principal = Principal.toJSON(message.principal);
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) =>
        CheckResourceBatchRequest_BatchEntry.toJSON(e),
      );
    }
    if (message.auxData !== undefined) {
      obj.auxData = AuxData.toJSON(message.auxData);
    }
    return obj;
  },
};

export const CheckResourceBatchRequest_BatchEntry = {
  fromJSON(object: any): CheckResourceBatchRequest_BatchEntry {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
    };
  },

  toJSON(message: CheckResourceBatchRequest_BatchEntry): unknown {
    const obj: any = {};
    if (message.actions?.length) {
      obj.actions = message.actions;
    }
    if (message.resource !== undefined) {
      obj.resource = Resource.toJSON(message.resource);
    }
    return obj;
  },
};

export const CheckResourcesRequest = {
  fromJSON(object: any): CheckResourcesRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      includeMeta: isSet(object.includeMeta)
        ? Boolean(object.includeMeta)
        : false,
      principal: isSet(object.principal)
        ? Principal.fromJSON(object.principal)
        : undefined,
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) =>
            CheckResourcesRequest_ResourceEntry.fromJSON(e),
          )
        : [],
      auxData: isSet(object.auxData)
        ? AuxData.fromJSON(object.auxData)
        : undefined,
    };
  },

  toJSON(message: CheckResourcesRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.includeMeta === true) {
      obj.includeMeta = message.includeMeta;
    }
    if (message.principal !== undefined) {
      obj.principal = Principal.toJSON(message.principal);
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) =>
        CheckResourcesRequest_ResourceEntry.toJSON(e),
      );
    }
    if (message.auxData !== undefined) {
      obj.auxData = AuxData.toJSON(message.auxData);
    }
    return obj;
  },
};

export const CheckResourcesRequest_ResourceEntry = {
  fromJSON(object: any): CheckResourcesRequest_ResourceEntry {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
    };
  },

  toJSON(message: CheckResourcesRequest_ResourceEntry): unknown {
    const obj: any = {};
    if (message.actions?.length) {
      obj.actions = message.actions;
    }
    if (message.resource !== undefined) {
      obj.resource = Resource.toJSON(message.resource);
    }
    return obj;
  },
};

export const AuxData = {
  fromJSON(object: any): AuxData {
    return {
      jwt: isSet(object.jwt) ? AuxData_JWT.fromJSON(object.jwt) : undefined,
    };
  },

  toJSON(message: AuxData): unknown {
    const obj: any = {};
    if (message.jwt !== undefined) {
      obj.jwt = AuxData_JWT.toJSON(message.jwt);
    }
    return obj;
  },
};

export const AuxData_JWT = {
  fromJSON(object: any): AuxData_JWT {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      keySetId: isSet(object.keySetId) ? String(object.keySetId) : "",
    };
  },

  toJSON(message: AuxData_JWT): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.keySetId !== "") {
      obj.keySetId = message.keySetId;
    }
    return obj;
  },
};

export const ServerInfoRequest = {
  fromJSON(_: any): ServerInfoRequest {
    return {};
  },

  toJSON(_: ServerInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
