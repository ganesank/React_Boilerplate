export interface ActionRedux<T> {
    (data?: T): void;
}

export interface ActionThunk<T1, T2> {
    (data1?: T1, data2?: T2): void;
}

export interface ActionPayload<T> {
    (data?: T): { type: string; payload?: T };
}

export interface Reducer<S, A> {
    (state: S, action: A): void;
}
