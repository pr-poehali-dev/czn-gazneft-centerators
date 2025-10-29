import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Applications = () => {
  const applications = [
    {
      icon: 'Fuel',
      title: 'Магистральные нефтепроводы',
      description: 'Центраторы ЦЗН обеспечивают точное центрирование труб большого диаметра при строительстве магистральных нефтепроводов',
      features: [
        'Диаметры от 530 до 1220 мм',
        'Высокая точность позиционирования',
        'Устойчивость к большим нагрузкам',
        'Соответствие требованиям Транснефти'
      ],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/099112dc-3cb4-4453-a44b-11a646660c9f.jpg'
    },
    {
      icon: 'Flame',
      title: 'Газотранспортные системы',
      description: 'Профессиональное оборудование для монтажа газопроводов различного назначения',
      features: [
        'Для магистральных газопроводов',
        'Для распределительных сетей',
        'Соответствие стандартам Газпрома',
        'Быстрый монтаж и демонтаж'
      ],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/099112dc-3cb4-4453-a44b-11a646660c9f.jpg'
    },
    {
      icon: 'Factory',
      title: 'Промышленные объекты',
      description: 'Центраторы для технологических трубопроводов на нефтеперерабатывающих и химических предприятиях',
      features: [
        'Широкий диапазон диаметров',
        'Устойчивость к агрессивным средам',
        'Повышенная надежность',
        'Индивидуальные решения'
      ],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/f23c72c2-e0a8-4f34-a9db-89732c1cc56c.jpg'
    },
    {
      icon: 'Building2',
      title: 'Промысловые трубопроводы',
      description: 'Оборудование для обустройства нефтяных и газовых месторождений',
      features: [
        'Малые и средние диаметры',
        'Работа в полевых условиях',
        'Компактность и мобильность',
        'Простота эксплуатации'
      ],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/099112dc-3cb4-4453-a44b-11a646660c9f.jpg'
    },
    {
      icon: 'Zap',
      title: 'Энергетика',
      description: 'Центраторы для трубопроводов тепловых и атомных электростанций',
      features: [
        'Высокотемпературные условия',
        'Особые требования к качеству',
        'Сертификация Ростехнадзора',
        'Полная документация'
      ],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/f23c72c2-e0a8-4f34-a9db-89732c1cc56c.jpg'
    },
    {
      icon: 'Waves',
      title: 'Водоснабжение и ЖКХ',
      description: 'Оборудование для систем водоснабжения и водоотведения',
      features: [
        'Стандартные диаметры ЖКХ',
        'Антикоррозийная защита',
        'Длительный срок службы',
        'Доступная цена'
      ],
      image: 'https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/f23c72c2-e0a8-4f34-a9db-89732c1cc56c.jpg'
    }
  ];

  const advantages = [
    {
      icon: 'Target',
      title: 'Точность центрирования',
      description: 'Погрешность не более 0.5 мм на метр длины трубы'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Ускорение монтажа на 40% по сравнению с ручным центрированием'
    },
    {
      icon: 'Award',
      title: 'Качество сварки',
      description: 'Равномерный зазор обеспечивает качественный сварной шов'
    },
    {
      icon: 'DollarSign',
      title: 'Снижение затрат',
      description: 'Уменьшение расхода сварочных материалов и брака'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Области применения</h1>
          <p className="text-lg text-muted-foreground">Центраторы ЦЗН используются в ключевых отраслях промышленности</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {applications.map((app, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={app.icon} className="text-primary" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold">{app.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">{app.description}</p>
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Подобрать оборудование
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="rounded-lg shadow-lg w-full aspect-video object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества использования центраторов ЦЗН</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                  <p className="text-sm opacity-90">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Нужна консультация по применению?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут выбрать оптимальное решение для вашего проекта и расскажут о технических особенностях применения
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить специалисту
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="FileText" className="mr-2" size={20} />
              Скачать техническую документацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Applications;
