import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '15+', label: 'Лет на рынке' },
    { value: '5000+', label: 'Реализованных проектов' },
    { value: '200+', label: 'Постоянных клиентов' },
    { value: '100%', label: 'Гарантия качества' }
  ];

  const advantages = [
    {
      icon: 'Factory',
      title: 'Собственное производство',
      description: 'Современное оборудование и квалифицированный персонал обеспечивают высокое качество продукции'
    },
    {
      icon: 'Shield',
      title: 'Сертификация и контроль',
      description: 'Вся продукция соответствует ГОСТам и международным стандартам качества'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Инженеры с многолетним опытом работы в нефтегазовой отрасли'
    },
    {
      icon: 'TrendingUp',
      title: 'Постоянное развитие',
      description: 'Внедряем новые технологии и совершенствуем производственные процессы'
    },
    {
      icon: 'Truck',
      title: 'Логистика по России',
      description: 'Оперативная доставка оборудования в любой регион страны'
    },
    {
      icon: 'Headphones',
      title: 'Техническая поддержка',
      description: 'Консультации специалистов на всех этапах эксплуатации оборудования'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании</h1>
          <p className="text-lg text-muted-foreground">Производство и поставка центраторов для нефтегазовой отрасли</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Надежный партнер в области сварочного оборудования</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">ЦЗН-Центратор</strong> — ведущий российский производитель центраторов для сварки трубопроводов. 
                  С 2009 года мы обеспечиваем нефтегазовую отрасль высококачественным оборудованием.
                </p>
                <p>
                  Наша миссия — предоставить профессиональное оборудование, которое повышает эффективность 
                  сварочных работ и обеспечивает безупречное качество соединений трубопроводов.
                </p>
                <p>
                  Мы гордимся тем, что наши центраторы используются на крупнейших российских объектах: 
                  магистральных нефте- и газопроводах, промышленных предприятиях, объектах энергетики.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8f15fa38-9d22-4ebd-b211-2a7f706505a6/files/f23c72c2-e0a8-4f34-a9db-89732c1cc56c.jpg" 
                alt="О компании"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Качество и надежность</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
            <p>
              Производство центраторов ЦЗН осуществляется на современном оборудовании с применением 
              высококачественных материалов. Каждое изделие проходит многоступенчатый контроль качества.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Контроль материалов</h4>
                  <p className="text-sm">Входной контроль сырья и комплектующих</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Контроль производства</h4>
                  <p className="text-sm">Проверка на каждом этапе изготовления</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Испытания</h4>
                  <p className="text-sm">Тестирование готовой продукции под нагрузкой</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Сертификация</h4>
                  <p className="text-sm">Документальное подтверждение соответствия стандартам</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
