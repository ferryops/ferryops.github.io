import { cn } from "@/lib/utils";

export function Typography({ variant = "p", size = "md", children, className, ...props }) {
  const baseStyles = "tracking-tight";
  const variants = {
    h1: "scroll-m-20 font-extrabold",
    h2: "scroll-m-20 font-semibold",
    h3: "scroll-m-20 font-semibold",
    h4: "scroll-m-20 font-semibold",
    h5: "scroll-m-20 font-semibold",
    h6: "scroll-m-20 font-semibold",
    p: "leading-7",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    ul: "my-6 ml-6 list-disc",
    ol: "my-6 ml-6 list-decimal",
    code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  };
  const sizes = {
    xs: {
      h1: "text-2xl lg:text-3xl",
      h2: "text-xl lg:text-2xl",
      h3: "text-lg lg:text-xl",
      h4: "text-base lg:text-lg",
      h5: "text-sm lg:text-base",
      h6: "text-xs lg:text-sm",
      p: "text-sm",
      blockquote: "text-sm",
      ul: "text-sm",
      ol: "text-sm",
      code: "text-xs",
    },
    sm: {
      h1: "text-3xl lg:text-4xl",
      h2: "text-2xl lg:text-3xl",
      h3: "text-xl lg:text-2xl",
      h4: "text-lg lg:text-xl",
      h5: "text-base lg:text-lg",
      h6: "text-sm lg:text-base",
      p: "text-sm lg:text-base",
      blockquote: "text-sm lg:text-base",
      ul: "text-sm lg:text-base",
      ol: "text-sm lg:text-base",
      code: "text-xs lg:text-sm",
    },
    md: {
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl lg:text-4xl",
      h3: "text-2xl lg:text-3xl",
      h4: "text-xl lg:text-2xl",
      h5: "text-lg lg:text-xl",
      h6: "text-base lg:text-lg",
      p: "text-base",
      blockquote: "text-base",
      ul: "text-base",
      ol: "text-base",
      code: "text-sm",
    },
    lg: {
      h1: "text-5xl lg:text-6xl",
      h2: "text-4xl lg:text-5xl",
      h3: "text-3xl lg:text-4xl",
      h4: "text-2xl lg:text-3xl",
      h5: "text-xl lg:text-2xl",
      h6: "text-lg lg:text-xl",
      p: "text-lg",
      blockquote: "text-lg",
      ul: "text-lg",
      ol: "text-lg",
      code: "text-base",
    },
  };

  const Component = variant;
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size][variant];

  return (
    <Component className={cn(baseStyles, variantStyles, sizeStyles, className)} {...props}>
      {children}
    </Component>
  );
}
