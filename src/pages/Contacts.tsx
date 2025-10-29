import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'MapPin',
      title: 'Офис и производство',
      value: 'г. Москва, ул. Промышленная, д. 15, корп. 2',
      link: null
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@czn-centrator.ru',
      link: 'mailto:info@czn-centrator.ru'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00, Сб-Вс: выходной',
      link: null
    }
  ];

  const departments = [
    {
      name: 'Отдел продаж',
      phone: '+7 (495) 123-45-67',
      email: 'sales@czn-centrator.ru',
      description: 'Заказ оборудования, коммерческие предложения'
    },
    {
      name: 'Техническая поддержка',
      phone: '+7 (495) 123-45-68',
      email: 'support@czn-centrator.ru',
      description: 'Консультации по применению, технические вопросы'
    },
    {
      name: 'Отдел качества',
      phone: '+7 (495) 123-45-69',
      email: 'quality@czn-centrator.ru',
      description: 'Вопросы по сертификатам и качеству продукции'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="text-sm text-primary hover:underline"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.ru" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input placeholder="ООО «Название компании»" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш запрос..." 
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Наши отделы</h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-3">{dept.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                      <div className="space-y-2">
                        <a 
                          href={`tel:${dept.phone.replace(/\D/g, '')}`} 
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Icon name="Phone" size={16} />
                          {dept.phone}
                        </a>
                        <a 
                          href={`mailto:${dept.email}`} 
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Icon name="Mail" size={16} />
                          {dept.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 mb-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted relative">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e5e1e2f9f0c5c5e5e5e5e5e5e5e5e5e5e5e5e5e&amp;source=constructor"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="absolute inset-0"
                  title="Карта"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы оформить заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Позвоните нам прямо сейчас или оставьте заявку — мы свяжемся с вами в течение 15 минут
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951234567">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (495) 123-45-67
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
