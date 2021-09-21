export type ActionRedux<T> = {
    (data?: T): void;
};

export type ActionThunk<T1, T2> = {
    (data1?: T1, data2?: T2): void;
};

export type ActionPayload<T> = {
    (data?: T): { type: string; payload?: T };
};

export type Reducer<S, A> = {
    (state: S, action: A): void;
};
