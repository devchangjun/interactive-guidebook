export interface SectionItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor?: string;
  content?: React.ReactNode;
}

export interface StickyStackSectionsProps {
  sections: SectionItem[];
  className?: string;
}
