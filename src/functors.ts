// some functors
export type Option<V> = { kind: 'some', value: V } | { kind: 'none' }
export type Result<V, E> = { kind: 'success', value: V } | { kind: 'error', error: E }
export type List<V> = { value: V, next: List<V> | null }
export type Tree<V> = { value: V, left: Tree<V>, rigth: Tree<V> }

export type Reader<a, i> = (i: i) => a

// units (allow to construct a functor from a value)
export const some = <V>(value: V): Option<V> => ({ kind: 'some', value })
export const success = <V, E>(value: V): Result<V, E> => ({ kind: 'success', value })
export const list_of = <V>(value: V): List<V> => ({ value, next: null })
export const reader = <V, I>(value: V): Reader<V, I> => (i: I) => value

// non-unit constructors
export const none = <V>(): Option<V> => ({ kind: 'none' })
export const fail = <V, E>(error: E): Result<V, E> => ({ kind: 'error', error })

export const identity = <T>(x: T) => x;

// export type fmap<A, B> = (f: (A: A) => B) =>((fun: Functor<A>) => Functor<B>);

export const mapOption = <A, B>(f: (a: A) => B) => (o: Option<A>): Option<B> =>
  o.kind === 'some' ? some(f(o.value)) : none()

export const mapResult = <A, B, E>(f: (a: A) => B) => (r: Result<A, E>): Result<B, E> =>
  r.kind === 'success' ? success(f(r.value)) : r

export const mapList = <A, B>(f: (a: A) => B) => (l: List<A>): List<B> =>
  ({ value: f(l.value), next: l.next ? mapList(f)(l.next) : null })

export const mapReader = <A, B, I>(f: (a: A) => B) => (r: Reader<A, I>): Reader<B, I> =>
  i => f(r(i))


export type FunctorMap<A> = {
  list: List<A>
  option: Option<A>
  result: Result<A, any>
  reader: Reader<A, any>
}

export type FmapLookup<A, B> = { [k in keyof FunctorMap<A>]: (f: (_: A) => B) => (_: FunctorMap<A>[k]) => FunctorMap<B>[k] };

export const fmaping: <A, B>() => FmapLookup<A, B> = () => ({
  list: (f) => (l) => mapList(f)(l),
  option: (f) => (o) => mapOption(f)(o),
  result: (f) => (r) => mapResult(f)(r),
  reader: (f) => (r) => mapReader(f)(r),
});

export type MapFunctor<functor, to> =
  functor extends List<any> ? List<to> :
  functor extends Option<any> ? Option<to> :
  functor extends Reader<any, infer i> ? Reader<to, i> :
  functor extends Result<any, infer e> ? Result<to, e> :
  never;

export type FunctorTypeGuards<A> = { [k in keyof FunctorMap<A>]: (f: any) => f is FunctorMap<A>[k] }

export const functorTypeGuards: FunctorTypeGuards<any> = {
  list: (l): l is List<any> => Object.keys(l).indexOf('value') !== -1 && Object.keys(l).indexOf('next') !== -1,
  option: (o): o is Option<any> => o.kind == 'some' || o.kind == 'none',
  reader: (r): r is Reader<any, any> => typeof r == 'function',
  result: (r): r is Result<any, any> => r.kind == 'success' || r.kind == 'error'
}

export const fmap = <A, B>(f: (a: A) => B) => <F extends FunctorMap<A>>(f1: F): MapFunctor<typeof f1, B> => {
  for (const g in functorTypeGuards) {
    // if (functorTypeGuards[g](f1)) {
    //   return fmaping<A, B>()[g](f)(f1);
    // }
  }
}

// // map :: Functor -> Functor
// const map = fmap((n: boolean) => n.toString());
// // map2 :: Option<boolean>
// const map2 = map(some(true));
