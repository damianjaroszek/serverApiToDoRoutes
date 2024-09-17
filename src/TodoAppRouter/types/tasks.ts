export type SingleTask = {
    id: number;
    title: string;
    description: string;
}

export type SingleTaskDto = Omit<SingleTask, 'id'>;