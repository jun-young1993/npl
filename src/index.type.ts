export interface OptionValues {
    init: boolean
}

export interface Options  {
    type: 'boolean' | 'string', // required
    short?: string, // optional
    multiple?: boolean, // optional, default `false`
    default?: boolean | string
  };

  export interface CreateOptions {
    directory: string;
    typescript?: boolean;
  }

  export interface ConfigOptions {
    key?: string
    value?: string
  }