import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'О компании', path: '/about' },
    { name: 'Применение', path: '/applications' },
    { name: 'Сертификаты', path: '/certificates' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <Icon name="Settings" className="text-primary-foreground" size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">ЦЗН-Центратор</h1>
              <p className="text-xs text-muted-foreground">Оборудование для сварки трубопроводов</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="font-medium">
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </a>
            <Button className="bg-secondary hover:bg-secondary/90">
              Заказать звонок
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start font-medium">
                  {item.name}
                </Button>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a href="tel:+74951234567" className="flex items-center gap-2 px-4 py-2">
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </a>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Заказать звонок
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
