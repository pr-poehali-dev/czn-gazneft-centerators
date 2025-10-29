import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      title: 'Сертификат соответствия ГОСТ',
      number: 'РОСС RU.АБ98.Н12345',
      date: 'Действителен до 15.12.2026',
      description: 'Подтверждает соответствие продукции требованиям ГОСТ 16037-80',
      icon: 'Award'
    },
    {
      title: 'ISO 9001:2015',
      number: 'RU.1234567.QMS',
      date: 'Действителен до 20.05.2026',
      description: 'Система менеджмента качества',
      icon: 'Shield'
    },
    {
      title: 'Декларация о соответствии ТР ТС',
      number: 'ТС N RU Д-RU.АБ12.В.34567',
      date: 'Действителен до 10.08.2027',
      description: 'Технический регламент Таможенного союза',
      icon: 'FileCheck'
    },
    {
      title: 'Разрешение Ростехнадзора',
      number: 'РРС 00-12345-2023',
      date: 'Действителен до 30.11.2025',
      description: 'Применение на опасных производственных объектах',
      icon: 'ShieldCheck'
    },
    {
      title: 'Сертификат Газпром',
      number: 'СДС.ТД.00123.Н',
      date: 'Действителен до 18.03.2026',
      description: 'Одобрение для применения в системе Газпром',
      icon: 'Flame'
    },
    {
      title: 'Сертификат Транснефть',
      number: 'СТН-Д-12345-2024',
      date: 'Действителен до 25.07.2027',
      description: 'Допуск к применению на объектах Транснефти',
      icon: 'Fuel'
    }
  ];

  const standards = [
    { name: 'ГОСТ 16037-80', description: 'Соединения сварные стальных трубопроводов' },
    { name: 'ГОСТ 16038-80', description: 'Сварка стальных трубопроводов' },
    { name: 'СНиП 3.05.05-84', description: 'Технологическое оборудование и технологические трубопроводы' },
    { name: 'ТР ТС 032/2013', description: 'О безопасности оборудования, работающего под избыточным давлением' },
    { name: 'ТР ТС 010/2011', description: 'О безопасности машин и оборудования' },
    { name: 'СТО Газпром 2-2.2-136-2007', description: 'Сварка стальных технологических трубопроводов' }
  ];

  const quality = [
    {
      icon: 'Search',
      title: 'Входной контроль',
      description: 'Проверка качества всех поступающих материалов и комплектующих'
    },
    {
      icon: 'Settings',
      title: 'Контроль производства',
      description: 'Проверка соблюдения технологии на каждом этапе производства'
    },
    {
      icon: 'TestTube',
      title: 'Испытания',
      description: 'Механические испытания готовой продукции под нагрузкой'
    },
    {
      icon: 'FileText',
      title: 'Документация',
      description: 'Полный комплект сопроводительной документации для каждого изделия'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Сертификаты и качество</h1>
          <p className="text-lg text-muted-foreground">Вся продукция соответствует российским и международным стандартам</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Действующие сертификаты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={cert.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.number}</p>
                  <p className="text-sm text-primary font-medium mb-3">{cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать копию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="FileDown" className="mr-2" size={20} />
              Скачать все сертификаты (ZIP)
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Соответствие стандартам</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">{standard.name}</h4>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Система контроля качества</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наша система менеджмента качества обеспечивает стабильно высокое качество продукции на всех этапах производства
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quality.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Award" size={64} className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Гарантия качества</h2>
            <p className="text-xl mb-6 opacity-90">
              Мы гарантируем соответствие нашей продукции всем заявленным характеристикам и стандартам качества
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-4xl font-bold mb-2">3 года</p>
                <p className="opacity-90">Гарантия на оборудование</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="opacity-90">Контроль качества</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="opacity-90">Техническая поддержка</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Заказать с гарантией
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificates;
