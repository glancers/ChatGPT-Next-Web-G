export type Updater<T> = (updater: (value: T) => Promise<void>) => void;
