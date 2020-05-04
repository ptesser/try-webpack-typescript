# Functors

A functor is a box that include a value.

With more generic terms it's a value with a **context** attached to it (metadata).

A **value** in a functor should behave the same as it wasn’t in that context.

Basic examples

```typescript
type Option<a> = { kind: 'some', value: a } | { kind: 'none' }
type Result<a, e> = { kind: 'success', value: a } | { kind: 'error', error: e }
type List<a> = { value: a, next: List<a> | null }
type Tree<a> = { value: a, left: Tree<a>, rigth: Tree<a>}
```

Every functor has a function that turn any possible value into a functor of that value.

This function doesn't modify the value itself, it just adds the box. The formal name is **Unit**.

TypeScript isn’t going to figure out on its own how it is going to extract the value from a functor. What we need to do is move the `toString` function inside the context of the functor so it operates on `Option<boolean>` and `Option<string>`.

This is often called **lifting the function** and the context is then referred to as the the ‘world’ of the functor.

To practically realize this functors implement a map function that turns any function that operates on the value inside the functor to a function that operates on a functor of that value.

This is very fundamental for functors, they abstract the context of a value, but don’t do anything with whats inside them.

The **functor laws** are a very formal definition of how a functor should behave to be an actual functor.

The **first law is the identity law**. It states that calling `id` on a functor is the same as mapping `id` over a functor:

`fmap idF = idF`

The **second functor law** says that **composition of arrows should be preserved inside the functor**. This one does also relate to the fact that functions behave the same in the functor as without a functor.

`fmap(f.g) F = fmap f (fmap f F)`

## TODO

- [ ] Check https://gist.github.com/lierdakil/2ece55b7684c5923b1ea4c36df643455
- [ ] Check https://dev.to/airtucha/functors-and-monads-in-plain-typescript-33o1
- [ ] Read https://books.google.it/books?id=iwGGDwAAQBAJ&pg=PA115&lpg=PA115&dq=typescript+functors+lib&source=bl&ots=LbRp1lGxag&sig=ACfU3U3tBDS4aFIqc1aQSu2uT5OqrmCgrA&hl=it&sa=X&ved=2ahUKEwjpibGGgJvpAhUFAGMBHSljAZsQ6AEwB3oECAoQAQ#v=onepage&q=typescript%20functors%20lib&f=false

## References

- https://itnext.io/fun-with-functors-in-typescript-2c3268853d69
