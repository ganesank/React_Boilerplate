import { MouseEvent } from 'react';
import { ApiForm, Thead } from '../types';

export type ApiFormC = {
    setApis(prev: any): void;
    data?: {
        api: ApiForm;
        idx: number;
    };
};

export type ApiTableC = {
    thead: Thead[];
    apis: ApiForm[];
    setApis(e: MouseEvent, obj: any, idx: number): void;
    setApi(e: MouseEvent, obj: any, idx: number): void;
};
