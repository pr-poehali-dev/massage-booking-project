import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Классический массаж",
    description: "Расслабляющий массаж всего тела для снятия напряжения и улучшения кровообращения",
    duration: "60 минут",
    price: "3000 ₽"
  },
  {
    title: "Антицеллюлитный массаж",
    description: "Специальная техника для коррекции фигуры и борьбы с целлюлитом",
    duration: "60 минут",
    price: "3500 ₽"
  },
  {
    title: "Лимфодренажный массаж",
    description: "Деликатный массаж для выведения лишней жидкости и улучшения лимфотока",
    duration: "60 минут",
    price: "3500 ₽"
  },
  {
    title: "Массаж спины и шеи",
    description: "Целенаправленная работа с зонами наибольшего напряжения",
    duration: "30 минут",
    price: "1800 ₽"
  }
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    comment: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Екатерина свяжется с вами в ближайшее время для подтверждения записи.",
    });
    setFormData({ name: "", phone: "", service: "", date: "", time: "", comment: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://cdn.poehali.dev/projects/3a017909-e482-4645-86dc-9abd3b0d1ce1/files/87099016-476a-468c-ba1c-0dab8030c213.jpg')` }}
      >
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-foreground">Екатерина</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный массаж для вашего здоровья и красоты
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 hover-scale"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на сеанс
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждый сеанс подбирается индивидуально с учетом ваших потребностей
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-2xl font-semibold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">Записаться на сеанс</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и я свяжусь с вами для подтверждения записи
          </p>

          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.title}>
                          {service.title} — {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания или вопросы"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="tel:+79999999999" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 999-99-99</span>
            </a>
            <a href="https://t.me/massage_ekaterina" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={20} />
              <span>Telegram</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Массаж от Екатерины. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;