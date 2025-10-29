import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Settings" className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-lg font-bold">ЦЗН-Центратор</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональное оборудование для сварки трубопроводов нефтегазовой отрасли
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О компании</Link></li>
              <li><Link to="/applications" className="text-muted-foreground hover:text-primary transition-colors">Применение</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/certificates" className="text-muted-foreground hover:text-primary transition-colors">Сертификаты</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@czn-centrator.ru" className="hover:text-primary transition-colors">info@czn-centrator.ru</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Icon name="MapPin" size={16} className="mt-0.5" />
                <span>г. Москва, ул. Промышленная, д. 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ЦЗН-Центратор. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
