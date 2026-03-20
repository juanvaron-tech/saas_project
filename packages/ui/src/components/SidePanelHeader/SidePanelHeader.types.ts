export interface SidePanelHeaderProps {
  /** Título principal del panel */
  title: string;
  /** Callback al presionar el botón de cierre */
  onClose?: () => void;
  /** Clase CSS adicional */
  className?: string;
}
