import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все центраторы' },
    { id: 'small', name: 'Малые диаметры (57-133 мм)' },
    { id: 'medium', name: 'Средние диаметры (219-325 мм)' },
    { id: 'large', name: 'Большие диаметры (530-1020 мм)' }
  ];

  const products = [
    {
      id: 1,
      name: 'ЦЗН-57',
      category: 'small',
      diameter: '57-76 мм',
      description: 'Центратор наружный для труб малого диаметра',
      price: '12 500',
      features: ['Высокая точность', 'Компактный размер', 'Легкий вес'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 2,
      name: 'ЦЗН-89',
      category: 'small',
      diameter: '89-102 мм',
      description: 'Центратор для промысловых трубопроводов',
      price: '14 200',
      features: ['Устойчивость к коррозии', 'Простота установки', 'Долговечность'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 3,
      name: 'ЦЗН-108',
      category: 'small',
      diameter: '108-133 мм',
      description: 'Центратор для технологических трубопроводов',
      price: '15 800',
      features: ['Универсальность', 'Надежная фиксация', 'ГОСТ соответствие'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 4,
      name: 'ЦЗН-219',
      category: 'medium',
      diameter: '219-273 мм',
      description: 'Центратор для магистральных трубопроводов',
      price: '22 400',
      features: ['Усиленная конструкция', 'Высокая нагрузка', 'Точное центрирование'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 5,
      name: 'ЦЗН-325',
      category: 'medium',
      diameter: '325-377 мм',
      description: 'Центратор для газопроводов среднего диаметра',
      price: '28 900',
      features: ['Антикоррозийное покрытие', 'Быстрый монтаж', 'Сертифицировано'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 6,
      name: 'ЦЗН-426',
      category: 'large',
      diameter: '426-530 мм',
      description: 'Центратор для трубопроводов большого диаметра',
      price: '34 500',
      features: ['Повышенная прочность', 'Стабильность', 'Длительный срок службы'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 7,
      name: 'ЦЗН-530',
      category: 'large',
      diameter: '530-630 мм',
      description: 'Центратор для магистральных нефтепроводов',
      price: '38 900',
      features: ['Максимальная нагрузка', 'Профессиональное качество', 'Гарантия 3 года'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 8,
      name: 'ЦЗН-720',
      category: 'large',
      diameter: '720-820 мм',
      description: 'Центратор для экстра-больших диаметров',
      price: '45 600',
      features: ['Специальная сталь', 'Индивидуальная настройка', 'Техподдержка'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    },
    {
      id: 9,
      name: 'ЦЗН-1020',
      category: 'large',
      diameter: '1020-1220 мм',
      description: 'Центратор для крупнейших магистральных систем',
      price: '58 900',
      features: ['Максимальный диаметр', 'Промышленная прочность', 'Полный сервис'],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/eeac5710-2b4e-4829-8f2d-6a7fc2ccde37.jpg'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог центраторов ЦЗН</h1>
          <p className="text-lg text-muted-foreground">Полный ассортимент оборудования для сварки трубопроводов всех диаметров</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-primary' : ''}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-2xl mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Ruler" size={14} />
                        Диаметр: {product.diameter}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">ОСОБЕННОСТИ:</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <Icon name="CheckCircle2" size={14} className="text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-secondary hover:bg-secondary/90">
                      Заказать
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="FileText" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли нужную модель?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Мы изготавливаем центраторы под индивидуальные параметры
          </p>
          <Button size="lg" className="bg-primary">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Запросить индивидуальное решение
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
