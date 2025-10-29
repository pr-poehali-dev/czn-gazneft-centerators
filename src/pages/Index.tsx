import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Сертифицированное качество',
      description: 'Вся продукция соответствует ГОСТам и международным стандартам'
    },
    {
      icon: 'Zap',
      title: 'Быстрая доставка',
      description: 'Отправка заказов по всей России в течение 24 часов'
    },
    {
      icon: 'Award',
      title: 'Гарантия 3 года',
      description: 'Полная гарантия на всё оборудование от производителя'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Техподдержка 24/7',
      description: 'Консультации специалистов в любое время суток'
    }
  ];

  const products = [
    {
      name: 'ЦЗН-57',
      description: 'Центратор наружный для труб Ø57-76 мм',
      price: '12 500',
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      name: 'ЦЗН-108',
      description: 'Центратор наружный для труб Ø108-133 мм',
      price: '15 800',
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      name: 'ЦЗН-219',
      description: 'Центратор наружный для труб Ø219-273 мм',
      price: '22 400',
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      name: 'ЦЗН-530',
      description: 'Центратор наружный для труб Ø530-630 мм',
      price: '38 900',
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    }
  ];

  const applications = [
    {
      icon: 'Fuel',
      title: 'Нефтепроводы',
      description: 'Магистральные и промысловые трубопроводы'
    },
    {
      icon: 'Flame',
      title: 'Газопроводы',
      description: 'Системы транспортировки природного газа'
    },
    {
      icon: 'Factory',
      title: 'Промышленность',
      description: 'Технологические трубопроводы предприятий'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section 
        className="relative bg-cover bg-center py-32 md:py-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://cdn.poehali.dev/files/f68369de-da74-4700-9b94-6fdc5bc5aa4c.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Центраторы ЦЗН для сварки трубопроводов
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Профессиональное оборудование для точного центрирования труб при сварке магистральных газо- и нефтепроводов
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                  Смотреть каталог
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
                  Консультация специалиста
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные модели</h2>
            <p className="text-muted-foreground text-lg">Центраторы для различных диаметров трубопроводов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/catalog">
              <Button size="lg" variant="outline">
                Весь каталог
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/099112dc-3cb4-4453-a44b-11a646660c9f.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Области применения</h2>
            <p className="text-white/90 text-lg">Наше оборудование используется в ключевых отраслях</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={app.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{app.title}</h3>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/applications">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Подробнее о применении
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна консультация по выбору оборудования?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Наши специалисты помогут подобрать оптимальное решение для вашего проекта
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951234567">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
            </a>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
                Написать в отдел продаж
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
