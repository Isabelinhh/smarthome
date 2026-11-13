import React, { useState } from 'react'
import { Home, Lightbulb, Thermometer, ShieldCheck, Zap, Wifi, Plus, ChevronRight, Power, Wind, Tv, DoorOpen, Sun, Moon, Settings, Bell, SlidersHorizontal } from 'lucide-react'

const initialDevices = [
  { id:1, name:'Luzes da sala', room:'Sala de estar', icon:Lightbulb, detail:'Brilho 80%', on:true, color:'violet' },
  { id:2, name:'Ar-condicionado', room:'Quarto principal', icon:Wind, detail:'22°C · Automático', on:true, color:'blue' },
  { id:3, name:'Smart TV', room:'Sala de estar', icon:Tv, detail:'Modo economia', on:false, color:'pink' },
  { id:4, name:'Fechadura', room:'Entrada', icon:DoorOpen, detail:'Porta trancada', on:true, color:'green' },
]
const rooms = ['Todos','Sala','Quarto','Cozinha']
export default function App(){
 const [devices,setDevices]=useState(initialDevices)
 const [activeRoom,setActiveRoom]=useState('Todos')
 const [tab,setTab]=useState('Início')
 const [scene,setScene]=useState('Modo conforto')
 const [notice,setNotice]=useState(false)
 const toggle=id=>setDevices(ds=>ds.map(d=>d.id===id?{...d,on:!d.on}:d))
 const visible=devices.filter(d=>activeRoom==='Todos'||d.room.toLowerCase().includes(activeRoom.toLowerCase()))
 const enabled=devices.filter(d=>d.on).length
 return <div className="app-shell">
  <header className="topbar"><div className="brand"><div className="brand-mark"><Home size={21}/><Wifi size={12}/></div><div><b>Smart<span>Home</span></b><small>CASA CONECTADA</small></div></div><button className="round-btn" onClick={()=>setNotice(!notice)} aria-label="Notificações"><Bell size={19}/><i/></button></header>
  {notice&&<div className="notice">Tudo certo! Sua casa está protegida e conectada.</div>}
  <main>
   <section className="welcome"><div><p className="eyebrow">QUINTA-FEIRA, 13 DE NOVEMBRO</p><h1>Bom dia,<br/><em>Isabelly.</em></h1><p className="muted">Sua casa está do jeitinho que você gosta.</p></div><div className="weather"><Sun size={25}/><b>24°</b><small>Ensolarado</small></div></section>
   <section className="status-card"><div className="status-head"><div className="status-icon"><ShieldCheck size={21}/></div><div><b>Sua casa está segura</b><small>Todos os sistemas funcionando</small></div><span className="online"><i/> Online</span></div><div className="status-stats"><div><strong>{enabled}<small>/{devices.length}</small></strong><span>Dispositivos ativos</span></div><div><strong>98<span>%</span></strong><span>Conexão Wi-Fi</span></div><div><strong>24<span>°C</span></strong><span>Temperatura</span></div></div></section>
   <section className="section"><div className="section-title"><div><p className="eyebrow">CONTROLE INTELIGENTE</p><h2>Ambientes</h2></div><button className="text-btn" onClick={()=>setActiveRoom('Todos')}>Ver todos <ChevronRight size={16}/></button></div>
    <div className="room-chips">{rooms.map(r=><button key={r} className={activeRoom===r?'selected':''} onClick={()=>setActiveRoom(r)}>{r}</button>)}</div>
    <div className="device-grid">{visible.map(d=>{const Icon=d.icon;return <article className="device-card" key={d.id}><div className="device-top"><div className={'device-icon '+d.color}><Icon size={21}/></div><button className={'power '+(d.on?'is-on':'')} onClick={()=>toggle(d.id)} aria-label={'Alternar '+d.name}><Power size={16}/></button></div><h3>{d.name}</h3><p>{d.detail}</p><div className="device-bottom"><span className={d.on?'state-on':'state-off'}>{d.on?'Ligado':'Desligado'}</span><span className="room-name">{d.room}</span></div></article>})}</div>
   </section>
   <section className="section scene-section"><div className="section-title"><div><p className="eyebrow">UM TOQUE MUDA TUDO</p><h2>Cenas inteligentes</h2></div><button className="add-btn" aria-label="Adicionar cena"><Plus size={18}/></button></div><div className="scene-grid">{[{name:'Modo conforto',desc:'Luzes suaves e clima ideal',icon:Home},{name:'Boa noite',desc:'Desligar tudo e proteger',icon:Moon},{name:'Energia solar',desc:'Aproveitar luz natural',icon:Sun}].map(s=>{const Icon=s.icon;return <button key={s.name} onClick={()=>setScene(s.name)} className={'scene-card '+(scene===s.name?'scene-active':'')}><div><Icon size={19}/></div><b>{s.name}</b><small>{s.desc}</small></button>})}</div></section>
   <section className="energy-card"><div className="energy-icon"><Zap size={20}/></div><div className="energy-copy"><small>CONSUMO DE ENERGIA HOJE</small><b>4,8 <span>kWh</span></b><p><span>↓ 12%</span> em relação a ontem</p></div><div className="energy-bars"><i/><i/><i/><i/><i/><i/><i/></div></section>
  </main>
  <nav className="bottom-nav">{[{name:'Início',icon:Home},{name:'Dispositivos',icon:SlidersHorizontal},{name:'Energia',icon:Zap},{name:'Ajustes',icon:Settings}].map(t=>{const Icon=t.icon;return <button key={t.name} className={tab===t.name?'active':''} onClick={()=>setTab(t.name)}><Icon size={19}/><span>{t.name}</span></button>})}</nav>
 </div>
}
