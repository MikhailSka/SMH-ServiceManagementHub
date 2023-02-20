export interface ITabContext {
    tab: HTMLElement | null
    openTab: (event: React.MouseEvent<HTMLElement>) => void
    closeTab: () => void
}