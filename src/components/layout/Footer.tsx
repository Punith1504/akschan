import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-foreground/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-bold text-xl tracking-tight mb-4 uppercase">
            Punni
          </h3>
          <p className="text-foreground/60 text-sm">
            Premium products curated for modern living. 
            Experience the future of commerce.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><Link href="/beauty" className="hover:text-primary transition-colors">Beauty</Link></li>
            <li><Link href="/herbal" className="hover:text-primary transition-colors">Herbal Products</Link></li>
            <li><Link href="/food" className="hover:text-primary transition-colors">Consumer Food</Link></li>
            <li><Link href="/textiles" className="hover:text-primary transition-colors">Indian Textiles</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
        <p>&copy; {new Date().getFullYear()} Punni Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
