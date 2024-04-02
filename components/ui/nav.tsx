'use client';

import { Home, LayoutDashboard, LifeBuoy, LucideIcon, Megaphone, Scroll, SquareUser } from 'lucide-react';
import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { usePathname } from 'next/navigation';


interface NavProps {
  isCollapsed: boolean;
  commonLinks:{
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost' | any;
    href: string;
  }[];
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost' | any;
    href: string;
  }[];
}

export function Nav({ links, isCollapsed ,commonLinks}: NavProps) {

  const pathName=usePathname();
  

  return (
    <TooltipProvider>
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {commonLinks.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: pathName===link.href?"default":"ghost", size: 'icon' }),
                    'h-9 w-9',
                    link.variant === 'default' &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant: pathName===link.href?"default":"ghost", size: 'sm' }),
                link.variant === 'default' &&
                  'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'justify-start'
              )}
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    'ml-auto',
                    link.variant === 'default' &&
                      'text-background dark:text-white'
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
      <Separator />
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: pathName===link.href?"default":"ghost", size: 'icon' }),
                    'h-9 w-9',
                    link.variant === 'default' &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant: pathName===link.href?"default":"ghost", size: 'sm' }),
                link.variant === 'default' &&
                  'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'justify-start'
              )}
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    'ml-auto',
                    link.variant === 'default' &&
                      'text-background dark:text-white'
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
      <Separator />


    </div>
    </TooltipProvider>
  );
}
