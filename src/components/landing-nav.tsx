// "use client";

// import { Button, buttonVariants } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Input } from '@/components/ui/input';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { ChevronDown, Menu, Search } from 'lucide-react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { cn } from '@/lib/utils';

// // const AshokaChakraLogo = () => (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     viewBox="0 0 24 24"
// //     fill="currentColor"
// //     className="h-12 w-12 text-primary"
// //   >
// //     <path
// //       d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
// //       fill="none"
// //     />
// //     <path
// //       d="M12 4a.999.999 0 00-1 1v2.58c-1.3.52-2.37 1.4-3.08 2.59l-2.16-.72a1 1 0 10-.72 1.86l2.16.72C7.37 13.6 8.44 14.48 9.74 15L7.58 15.72a1 1 0 10.72 1.86l2.16-.72c1.09.71 2.37 1.14 3.74 1.14s2.65-.43 3.74-1.14l2.16.72a1 1 0 10.72-1.86L14.26 15c1.3-.52 2.37-1.4 3.08-2.59l2.16.72a1 1 0 10.72-1.86l-2.16-.72C17.27 8.7 16.2 7.82 14.9 7.29V5a1 1 0 00-1-1zm0 2.5c2.49 0 4.5 2.01 4.5 4.5S14.49 15.5 12 15.5 7.5 13.49 7.5 11 9.51 6.5 12 6.5z"
// //     />
// //     <path
// //       d="M12 10a1 1 0 110 2 1 1 0 010-2zM12 6.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM12 14.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM15.57 7.72a.5.5 0 01.63.31l.5 1.73a.5.5 0 11-.94.27l-.5-1.73a.5.5 0 01.31-.63zM7.22 13.04a.5.5 0 01.63.31l.5 1.73a.5.5 0 01-.94.27l-.5-1.73a.5.5 0 01.31-.63zM8.43 7.72a.5.5 0 01.31.63l-.5 1.73a.5.5 0 11-.94-.27l.5-1.73a.5.5 0 01.63-.31zM14.36 13.04a.5.5 0 01.31.63l-.5 1.73a.5.5 0 11-.94-.27l.5-1.73a.5.5 0 01.63-.31zM6.5 11a.5.5 0 01.5.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5v-1zM15.5 11a.5.5 0 01.5.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5v-1zM9.64 14.36a.5.5 0 01.63-.31l1.73.5a.5.5 0 01.27.94l-1.73.5a.5.5 0 01-.63-.31.5.5 0 01.31-.63zM13.04 7.22a.5.5 0 01.63-.31l1.73.5a.5.5 0 11-.27.94l-1.73-.5a.5.5 0 01-.31-.63zM8.96 14.36a.5.5 0 01-.63.31l-1.73-.5a.5.5 0 11.27-.94l1.73.5a.5.5 0 01.31.63zM14.36 8.96a.5.5 0 01-.63.31l-1.73-.5a.5.5 0 11.27-.94l1.73.5a.5.5 0 01.31-.63z"
// //       fill="currentColor"
// //     />
// //   </svg>
// // );
// const IndiaEmblem = ({ size = 48 }: { size?: number }) => (
//   <svg
//     viewBox="0 0 512 512"
//     width={size}
//     height={size}
//     className="text-primary"
//     fill="currentColor"
//   >
//     {/* Base (Ashoka Chakra) */}
//     <circle cx="256" cy="360" r="40" fill="none" stroke="currentColor" strokeWidth="8"/>

//     {/* Pillar Base */}
//     <rect x="156" y="300" width="200" height="40" rx="8" />

//     {/* Lions (simplified official front view style) */}
//     {/* Center Lion */}
//     <circle cx="256" cy="160" r="40" />
//     <rect x="220" y="180" width="72" height="60" rx="10" />

//     {/* Left Lion */}
//     <circle cx="160" cy="180" r="35" />
//     <rect x="130" y="200" width="60" height="50" rx="8" />

//     {/* Right Lion */}
//     <circle cx="352" cy="180" r="35" />
//     <rect x="322" y="200" width="60" height="50" rx="8" />

//     {/* Base Strip */}
//     <rect x="140" y="260" width="230" height="20" rx="6" />

//     {/* Motto line */}
//     <rect x="180" y="400" width="150" height="10" rx="4" />
//   </svg>
// );

// const AshokaChakraLogo = ({ size = 48 }: { size?: number }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width={size}
//     height={size}
//     className="text-primary transition-transform duration-300 hover:rotate-6"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.2"
//   >
//     {/* Outer Circle */}
//     <circle cx="12" cy="12" r="9" />

//     {/* Inner Circle */}
//     <circle cx="12" cy="12" r="3" />

//     {/* Spokes (simplified for clarity & performance) */}
//     <g strokeLinecap="round">
//       {[...Array(12)].map((_, i) => {
//         const angle = (i * 30 * Math.PI) / 180;
//         const x1 = 12 + 3 * Math.cos(angle);
//         const y1 = 12 + 3 * Math.sin(angle);
//         const x2 = 12 + 9 * Math.cos(angle);
//         const y2 = 12 + 9 * Math.sin(angle);

//         return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
//       })}
//     </g>
//   </svg>
// );
// const navLinks = [
//     { href: "#features", label: "Services" },
//     { href: "#", label: "Departments" },
//     { href: "/register/citizen", label: "Grievance" },
//     { href: "/dashboard/citizen/complaints", label: "Track Status" },
//     { href: "/dashboard/citizen", label: "User Dashboard" },
// ];


// export function LandingNav() {
//   const router = useRouter();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="w-full bg-background border-b shadow-sm">
//         <div className="container flex h-20 items-center">
//             {/* <div className="flex items-center gap-4">
//                 <Link href="/" className="flex items-center gap-3">
//                     <AshokaChakraLogo />
//                     <div>
//                         <span className="block font-headline text-2xl font-bold text-foreground leading-tight">
//                         CivicConnect
//                         </span>
//                         <span className="block text-sm font-bold text-muted-foreground leading-tight">
//                         सत्यमेव जयते
//                         </span>
//                     </div>
//                 </Link>
//             </div> */}



            

//     <div className="flex items-center gap-3 group">
//   <Link href="/" className="flex items-center gap-3">

//     {/* Emblem */}
//     <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 shadow-md">
//       <IndiaEmblem size={36} />
//     </div>

//     {/* Text */}
//     <div className="leading-tight">
//       <span className="block text-lg font-bold text-foreground">
//         Government of India
//       </span>

//       <span className="block text-sm font-semibold text-primary">
//         CivicConnect Portal
//       </span>

//       <span className="block text-xs text-muted-foreground">
//         सत्यमेव जयते
//       </span>
//     </div>

//   </Link>
// </div>
            
//             {/* Desktop Nav */}
//             {/* <nav className="ml-12 hidden lg:flex gap-1 sm:gap-2 items-center">
//               {navLinks.map((link) => (
//                     <Link
//                         key={link.label}
//                         href={link.href}
//                         className={cn(buttonVariants({ variant: "ghost" }), "text-muted-foreground font-medium")}
//                     >
//                         {link.label}
//                     </Link>
//                 ))}
//             </nav> */}

//             <div className="ml-auto flex items-center gap-4">
//                  {/* <div className="relative hidden md:block">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                     <Input placeholder="Search services..." className="pl-10 w-48" />
//                 </div> */}
//                 <div className="hidden md:flex items-center gap-2">
//                     {/* <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="outline">
//                         Login <ChevronDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => router.push('/login/citizen')}>
//                         Citizen Login
//                         </DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => router.push('/login/organization')}>
//                         Organization Login
//                         </DropdownMenuItem>
//                     </DropdownMenuContent>
//                     </DropdownMenu> */}
//                     <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button>
//                         Login <ChevronDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => router.push('/register/citizen')}>
//                         Citizen Registration
//                         </DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => router.push('/register/staff')}>
//                         Staff Registration
//                         </DropdownMenuItem>
//                     </DropdownMenuContent>
//                     </DropdownMenu>
//                 </div>

//                 {/* Mobile Nav */}
//                 <div className="flex md:hidden">
//                 <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
//                     <SheetTrigger asChild>
//                         <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/20 hover:text-foreground">
//                             <Menu className="h-6 w-6" />
//                             <span className="sr-only">Open menu</span>
//                         </Button>
//                     </SheetTrigger>
//                     <SheetContent side="right">
//                         {/* Mobile menu content would be redesigned here */}
//                     </SheetContent>
//                 </Sheet>
//                 </div>
//             </div>
//         </div>
//     </nav>
//   );
// }


































"use client";

import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const IndiaEmblem = ({ size = 40 }: { size?: number }) => (
  <img
    src="https://www.psgtech.edu/ncc/images/symbols/embleml.png"
    // https://www.psgtech.edu/ncc/images/symbols/embleml.png // 👉 Put real emblem PNG in public folder
    alt="Government of India"
    width={size}
    height={size}
  />
);

const navLinks = [
  { href: "#features", label: "Services" },
  { href: "#", label: "Departments" },
  { href: "/register/citizen", label: "Grievance" },
  { href: "/dashboard/citizen/complaints", label: "Track Status" },
];

export function LandingNav() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 🔷 TOP GOVERNMENT STRIP */}
      {/* <div className="w-full bg-[#0B3D91] text-white text-xs py-1 px-4 flex justify-between items-center">
        <span>🇮🇳 Government of India</span>

        <div className="flex items-center gap-4">
          <button className="hover:underline">English</button>
          <button className="hover:underline">हिंदी</button>
        </div>
      </div> */}

      {/* 🔷 MAIN HEADER */}
      <nav className="w-full bg-white border-b shadow-sm">
        <div className="container flex h-20 items-center">

          {/* LEFT: LOGO + TEXT */}
          <Link href="/" className="flex items-center gap-3">

            <IndiaEmblem />

            <div className="leading-tight">
              <span className="block text-sm font-semibold text-gray-600">
                Government of India
              </span>

              <span className="block text-lg md:text-xl font-bold text-[#0B3D91]">
                CivicConnect Portal
              </span>

              <span className="block text-xs text-gray-500">
                Ministry of Electronics & IT
              </span>

              <span className="block text-xs text-gray-400">
                सत्यमेव जयते
              </span>
            </div>
          </Link>

          {/* CENTER: NAV LINKS */}
          {/* <div className="hidden lg:flex ml-12 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-gray-700 font-medium hover:text-[#0B3D91]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div> */}

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-4">

            {/* LOGIN */}
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#0B3D91] hover:bg-[#082c6c]">
                    Login <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push('/register/citizen')}>
                    Citizen Registration
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/register/staff')}>
                    Staff Registration
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* MOBILE MENU */}
            <div className="flex lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right">
                  <div className="flex flex-col gap-4 mt-6">
                    {navLinks.map((link) => (
                      <Link key={link.label} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}