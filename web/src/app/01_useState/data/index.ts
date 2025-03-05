interface Obj {
  name: string;
  age: number | string;
}

type Obj2 = {
  id: number;
  name: string;
  age: number | string;
};

const forUseState03Data: Obj = {
  name: '佐々木希',
  age: 43,
};

const forUseState04Data: Obj2[] = [
  {
    id: 1,
    name: '阿部寛',
    age: 54,
  },
  {
    id: 2,
    name: '斉藤ななみ',
    age: 32,
  },
];

export type { Obj, Obj2 };
export { forUseState03Data, forUseState04Data };
