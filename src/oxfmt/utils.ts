export type RequiredExceptExperimental<T> = {
	[TKey in keyof T as TKey extends `experimental${string}` ? never : TKey]-?: T[TKey];
} & {
	[TKey in keyof T as TKey extends `experimental${string}` ? TKey : never]?: T[TKey];
};
