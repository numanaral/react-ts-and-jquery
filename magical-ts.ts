// magical ts

namespace Range {
  /** @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-674514787 */
  type BuildPowersOf2LengthArrays<
    N extends number,
    R extends never[][]
  > = R[0][N] extends never
    ? R
    : BuildPowersOf2LengthArrays<N, [[...R[0], ...R[0]], ...R]>;

  /** @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-674514787 */
  type ConcatLargestUntilDone<
    N extends number,
    R extends never[][],
    B extends never[]
  > = B["length"] extends N
    ? B
    : [...R[0], ...B][N] extends never
    ? ConcatLargestUntilDone<
        N,
        R extends [R[0], ...infer U]
          ? U extends never[][]
            ? U
            : never
          : never,
        B
      >
    : ConcatLargestUntilDone<
        N,
        R extends [R[0], ...infer U]
          ? U extends never[][]
            ? U
            : never
          : never,
        [...R[0], ...B]
      >;

  /** @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-674514787 */
  export type Replace<R extends any[], T> = { [K in keyof R]: T };

  /** @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-674514787 */
  export type TupleOf<T, N extends number> = number extends N
    ? T[]
    : {
        [K in N]: BuildPowersOf2LengthArrays<K, [[never]]> extends infer U
          ? U extends never[][]
            ? Replace<ConcatLargestUntilDone<K, U, []>, T>
            : never
          : never;
      }[N];

  /**
   * @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-725812899
   *
   * @example
   * ```ts
   * const v: Vector<2> = [1, 2]
   * ```
   */
  export type Vector<Length extends number> = TupleOf<number, Length>;

  /**
   * @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-725812899
   *
   * @example
   * ```ts
   * const m: Matrix<2, 3> = [
   *   [1, 2, 3],
   *   [1, 2, 3],
   * ]
   * ```
   */
  export type Matrix<Rows extends number, Columns extends number> = TupleOf<
    TupleOf<number, Columns>,
    Rows
  >;

  /**
   * Gives range of numbers as type. Recursive combination of the following two.
   * @see https://github.com/microsoft/TypeScript/issues/15480#issuecomment-754770670
   * @see https://github.com/microsoft/TypeScript/issues/15480#issuecomment-754795473
   *
   * @example
   * ```ts
   * // 0 | 1 | 2 | 3
   * RangeFromTo<3>
   * // 1 | 2 | 3
   * RangeFromTo<3, 1>
   * ```
   */
  export type RangeOf<
    To extends number,
    From extends number = 0
  > = From extends 0
    ? Partial<Vector<To>>["length"]
    : Exclude<RangeOf<To>, RangeOf<From>> | From;
}

namespace Dates {
  type PaddedSingleDigit = `0${Range.RangeOf<9, 1>}`;
  type Day = PaddedSingleDigit | `${Range.RangeOf<31, 10>}`;
  type Month = PaddedSingleDigit | `${Range.RangeOf<12, 10>}`;
  type Year = `${number}${number}${number}${number}`;
  export type YYYY_MM_DD = `${Year}-${Month}-${Day}`;
}

const date: Dates.YYYY_MM_DD = "2021-11-12"; // No ts error.
const nonDate: Dates.YYYY_MM_DD = "2021-13-12"; // Error: "is not assignable to type".
