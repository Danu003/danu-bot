let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberikan Kode Gift Seminggu!
│
│ > Harga :
 • 5k / Minggu (7 Hari)
│• 10K / Bulan (4 Minguu)
│• 20K / Tahun (12 Bulan)
│• 50K / VIP (Permanen)
│
│ > Pembayaran :
│• DANA : 0852-1600-7427
 • PULSA : 0852-1600-7427
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
