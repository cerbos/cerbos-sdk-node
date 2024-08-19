// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: google/protobuf/struct.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "google.protobuf";

export enum NullValue {
  NULL_VALUE = 0,
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum NullValue",
      );
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum NullValue",
      );
  }
}

export interface Struct {
  fields: { [key: string]: any | undefined };
}

export interface Struct_FieldsEntry {
  key: string;
  value: any | undefined;
}

export interface Value {
  kind?:
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "structValue"; structValue: { [key: string]: any } | undefined }
    | { $case: "listValue"; listValue: Array<any> | undefined }
    | undefined;
}

export interface ListValue {
  values: any[];
}

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  encode(
    message: Struct,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    Object.entries(message.fields).forEach(([key, value]) => {
      if (value !== undefined) {
        Struct_FieldsEntry.encode(
          { key: key as any, value },
          writer.uint32(10).fork(),
        ).join();
      }
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Struct {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    if (message.fields) {
      const entries = Object.entries(message.fields);
      if (entries.length > 0) {
        obj.fields = {};
        entries.forEach(([k, v]) => {
          obj.fields[k] = v;
        });
      }
    }
    return obj;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();

    if (object !== undefined) {
      for (const key of Object.keys(object)) {
        struct.fields[key] = object[key];
      }
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    if (message.fields) {
      for (const key of Object.keys(message.fields)) {
        object[key] = message.fields[key];
      }
    }
    return object;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: "", value: undefined };
}

export const Struct_FieldsEntry = {
  encode(
    message: Struct_FieldsEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): Struct_FieldsEntry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
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

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  encode(
    message: Value,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    switch (message.kind?.$case) {
      case "nullValue":
        writer.uint32(8).int32(message.kind.nullValue);
        break;
      case "numberValue":
        writer.uint32(17).double(message.kind.numberValue);
        break;
      case "stringValue":
        writer.uint32(26).string(message.kind.stringValue);
        break;
      case "boolValue":
        writer.uint32(32).bool(message.kind.boolValue);
        break;
      case "structValue":
        Struct.encode(
          Struct.wrap(message.kind.structValue),
          writer.uint32(42).fork(),
        ).join();
        break;
      case "listValue":
        ListValue.encode(
          ListValue.wrap(message.kind.listValue),
          writer.uint32(50).fork(),
        ).join();
        break;
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Value {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = {
            $case: "nullValue",
            nullValue: reader.int32() as any,
          };
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.kind = { $case: "numberValue", numberValue: reader.double() };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.kind = { $case: "stringValue", stringValue: reader.string() };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.kind = { $case: "boolValue", boolValue: reader.bool() };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.kind = {
            $case: "structValue",
            structValue: Struct.unwrap(Struct.decode(reader, reader.uint32())),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.kind = {
            $case: "listValue",
            listValue: ListValue.unwrap(
              ListValue.decode(reader, reader.uint32()),
            ),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      kind: isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.numberValue)
          ? {
              $case: "numberValue",
              numberValue: globalThis.Number(object.numberValue),
            }
          : isSet(object.stringValue)
            ? {
                $case: "stringValue",
                stringValue: globalThis.String(object.stringValue),
              }
            : isSet(object.boolValue)
              ? {
                  $case: "boolValue",
                  boolValue: globalThis.Boolean(object.boolValue),
                }
              : isSet(object.structValue)
                ? { $case: "structValue", structValue: object.structValue }
                : isSet(object.listValue)
                  ? { $case: "listValue", listValue: [...object.listValue] }
                  : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    if (message.kind?.$case === "nullValue") {
      obj.nullValue = nullValueToJSON(message.kind.nullValue);
    }
    if (message.kind?.$case === "numberValue") {
      obj.numberValue = message.kind.numberValue;
    }
    if (message.kind?.$case === "stringValue") {
      obj.stringValue = message.kind.stringValue;
    }
    if (message.kind?.$case === "boolValue") {
      obj.boolValue = message.kind.boolValue;
    }
    if (message.kind?.$case === "structValue") {
      obj.structValue = message.kind.structValue;
    }
    if (message.kind?.$case === "listValue") {
      obj.listValue = message.kind.listValue;
    }
    return obj;
  },

  wrap(value: any): Value {
    const result = createBaseValue();
    if (value === null) {
      result.kind = { $case: "nullValue", nullValue: NullValue.NULL_VALUE };
    } else if (typeof value === "boolean") {
      result.kind = { $case: "boolValue", boolValue: value };
    } else if (typeof value === "number") {
      result.kind = { $case: "numberValue", numberValue: value };
    } else if (typeof value === "string") {
      result.kind = { $case: "stringValue", stringValue: value };
    } else if (globalThis.Array.isArray(value)) {
      result.kind = { $case: "listValue", listValue: value };
    } else if (typeof value === "object") {
      result.kind = { $case: "structValue", structValue: value };
    } else if (typeof value !== "undefined") {
      throw new globalThis.Error("Unsupported any value type: " + typeof value);
    }
    return result;
  },

  unwrap(
    message: Value,
  ): string | number | boolean | Object | null | Array<any> | undefined {
    if (message.kind?.$case === "nullValue") {
      return null;
    } else if (message.kind?.$case === "numberValue") {
      return message.kind?.numberValue;
    } else if (message.kind?.$case === "stringValue") {
      return message.kind?.stringValue;
    } else if (message.kind?.$case === "boolValue") {
      return message.kind?.boolValue;
    } else if (message.kind?.$case === "structValue") {
      return message.kind?.structValue;
    } else if (message.kind?.$case === "listValue") {
      return message.kind?.listValue;
    } else {
      return undefined;
    }
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  encode(
    message: ListValue,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.values) {
      Value.encode(Value.wrap(v!), writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListValue {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(
            Value.unwrap(Value.decode(reader, reader.uint32())),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    return {
      values: globalThis.Array.isArray(object?.values)
        ? [...object.values]
        : [],
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  wrap(array: Array<any> | undefined): ListValue {
    const result = createBaseListValue();
    result.values = array ?? [];
    return result;
  },

  unwrap(message: ListValue): Array<any> {
    if (
      message?.hasOwnProperty("values") &&
      globalThis.Array.isArray(message.values)
    ) {
      return message.values;
    } else {
      return message as any;
    }
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
