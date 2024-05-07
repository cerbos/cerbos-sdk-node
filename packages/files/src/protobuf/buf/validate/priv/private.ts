// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               unknown
// source: buf/validate/priv/private.proto

/* eslint-disable */

export const protobufPackage = "buf.validate.priv";

export interface FieldConstraints {
  cel: Constraint[];
}

export interface Constraint {
  id: string;
  message: string;
  expression: string;
}

export const FieldConstraints = {
  fromJSON(object: any): FieldConstraints {
    return {
      cel: globalThis.Array.isArray(object?.cel)
        ? object.cel.map((e: any) => Constraint.fromJSON(e))
        : [],
    };
  },
};

export const Constraint = {
  fromJSON(object: any): Constraint {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      expression: isSet(object.expression)
        ? globalThis.String(object.expression)
        : "",
    };
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
