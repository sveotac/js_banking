import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screnen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              <Image
                src="/icons/auth-image.svg"
                alt="auth image"
                width={650}
                height={650}
                className="flex j"
              />
            </div>
          </div>
      </main>
    );
    }