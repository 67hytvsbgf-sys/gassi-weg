import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-preise',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './preise.component.html',
  styleUrl: './preise.component.css'
})
export class PreiseComponent {
  packages = [
    {
      name: 'Kurzrunde',
      duration: '30 Minuten',
      price: 12,
      desc: 'Perfekt für einen schnellen Spaziergang zwischendurch.',
      features: ['30 Min. Gassi', 'Foto-Update optional', 'Kleine bis mittlere Hunde'],
      popular: false,
      color: 'cyan'
    },
    {
      name: 'Standard',
      duration: '60 Minuten',
      price: 18,
      desc: 'Die beliebteste Runde – genug Zeit für Spiel & Erkundung.',
      features: ['60 Min. Gassi', 'Foto-Update inklusive', 'Alle Hundegrößen', 'Kurzer Report'],
      popular: true,
      color: 'magenta'
    },
    {
      name: 'Extra-Lang',
      duration: '90 Minuten',
      price: 25,
      desc: 'Für energiegeladene Hunde, die richtig auspowern wollen.',
      features: ['90 Min. Gassi', 'Mehrere Fotos', 'Spielzeit im Park', 'Detaillierter Report'],
      popular: false,
      color: 'yellow'
    }
  ];
}
