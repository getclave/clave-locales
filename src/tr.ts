/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { type Locale } from './types';

export const tr: Locale = {
    locale: 'tr',
    general: {
        identifiers: {
            self: 'Ben',
        },
    },
    error_codes: {
        '0': 'Bilinmiyor',
        '1': 'Yetkisiz',
        '4': 'Bulunamadı',
        '600': 'Tekrar deneyin',
        '1001': 'Kullanıcı adı zaten alınmış',
        '1002': 'Kullanıcı adı çok kısa',
        '1003': 'Kullanıcı adı çok uzun',
        '1004': 'Kullanıcı adı mevcut değil',
        '1005': 'E-posta zaten kayıtlı',
        '1006': 'E-posta zaten gönderildi',
        '1007': 'E-posta gönderilemedi',
        '1008': 'Doğrulama kodu kullanıldı',
        '1009': 'Doğrulama kodu süresi doldu',
        '1010': 'Maksimum deneme sayısına ulaşıldı',
        '1011': 'Geçersiz doğrulama kodu',
        '1012': 'Kullanıcı bulunamadı',
        '1013': 'Genel anahtar mevcut değil',
        '1014': 'E-posta mevcut değil',
        '1015': 'Captcha doğrulanmadı',
        '1016': 'Bekleme listesi kodu bulunamadı',
        '1017': 'Bekleme listesi kodu zaten kullanılmış',
        '1018': 'Geçersiz bekleme listesi kodu',
        '1019': 'Geçersiz e-posta',
        '1020': 'Sadece harf veya rakam kullanılabilir',
        '1021': 'İmza doğrulanamadı',
        '1022': 'Yedekleme eklenemedi',
        '1023': 'Cüzdan dağıtılamadı',
        '1024': 'Tercihler güncellenemedi',
        '1025': 'Kayıt tokeni süresi doldu, lütfen yeniden başlayın',
        '1026': 'Kurtarma başlatılmadı',
        '1027': 'Kurtarma zaten başlatıldı',
        '1028': 'Bulut kurtarma başlatılamadı',
        '1029': 'Kurtarma uygulanamaz',
        '1030': 'Bulut kurtarma uygulanamaz',
        '1031': 'Yanlış şifre',
        '1032': 'Bulut yedeği bulunamadı',
        '1033': 'Bulut depolama yazım hatası',
        '1034': 'Bulut depolama verileri silinemedi',
        '1035': 'Google ile giriş yapılamadı, lütfen daha sonra tekrar deneyin',
        '1036': 'Minimum 8 karakter gerekli',
        '1037': 'Bir büyük harf ekleyin.',
        '1038': 'Bir küçük harf ekleyin.',
        '1039': 'Bir sayı ekleyin.',
        '1040': 'Bir özel karakter ekleyin.',
        '1041': 'İmza verileri bozuk, lütfen daha sonra tekrar deneyin',
        '1042': 'Genel anahtar silinirken hata oluştu',
        '1043': 'Zaten bir grup üyesisiniz',
        '1044': 'Davet kodu geçersiz',
        '1045': 'Grup limiti aşıldı',
        '1046': 'Grup üye limiti aşıldı',
        '1047': 'Yetkisizsiniz',
        '1048': 'Peanut bağlantısı talep edilirken hata oluştu',
        '1049': 'Cüzdan mevcut değil',
        '1050': 'Geçersiz meydan okuma',
        '1051': 'Giriş başarısız',
        '1052': 'Kullanıcı kimlik doğrulamasını reddetti',
        '1053': 'Gas limiti çok yüksek',
        '9000': 'Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin',
        '9001': 'İşlemi tamamlamak için yetersiz bakiye',
        '9002': 'İşlem doğrulanamadı. Lütfen daha sonra tekrar deneyin',
        '9003': 'Uygulama geri çevrildi',
    },
    backup: {
        status: {
            added: {
                title: 'Koruyucular Başarıyla Eklendi',
                subtext:
                    'Koruyucularınız ile hesabınızı, 48 saatlik bekleme süresi ile kurtarabilirsiniz.',
            },
            removed: {
                title: 'Koruyucu Başarıyla Kaldırıldı',
                subtext:
                    'Yedekleme menüsünden her zaman yeni koruyucular ekleyebilirsiniz.',
            },
            done: 'Tamam',
        },
        social: {
            title: 'Sosyal Yedekleme',
            subtext:
                'Clave’deki arkadaşlarınız veya zkSync Era’daki herhangi bir adres koruyucu olarak atanabilir.',
            'subtext-link': 'Daha fazla öğrenmek için tıklayın',
            'subtext-link-url':
                'https://blog.getclave.io/recovery-for-everyone-cloud-and-guardians',
            cancel: 'Yedeklemeyi İptal Et',
            add_new_guardian: 'Yeni Koruyucular Ekle',
            add_guardian_max: 'Maksimum Koruyucu Limiti Aşıldı',
            guardian: {
                title: 'Koruyucular Ekle',
                subtext:
                    'Koruyucular başka bir cihazda hesabınızı kurtarmanıza yardımcı olabilir.',
                update_fail:
                    'Bildirim tercihleri güncellenemedi. Lütfen tekrar deneyin.',
                add_guardian: 'Koruyucular Ekle',
                notify: 'Koruyucuları Bildir',
                add_another: 'Başka Bir Koruyucu Ekle',
                add: 'Devam Et',
            },
            current_email: 'E-posta',
            add_guardian_input: {
                own_address: 'Kendinizi koruyucu olarak ekleyemezsiniz.',
                already_exists: 'Bu adres zaten bir koruyucu.',
                label: 'Clave Kullanıcı Adı / ENS / 0x Adresi',
                invalid_ens_address: 'Geçersiz ENS adresi',
                invalid_address: 'Geçersiz adres',
                invalid_username: 'Geçersiz kullanıcı adı',
                resolved: 'Adres: {{address}}',
            },
            notify_guardian_bottom_sheet: {
                title: 'Koruyucuları Bildir',
                subtext:
                    'Koruyucu olarak atadığınız veya kaldırdığınızda sadece Clave kullanıcıları bildirim alabilir.',
                continue: 'Anladım',
            },
            empty_state: {
                title: '',
                subtext:
                    'Sosyal Yedekleme için en az bir koruyucu eklemeniz gerekiyor.',
            },
            remove_guardian_bottom_sheet: {
                title: 'Koruyucuyu Kaldır',
                subtext:
                    'Her zaman en az bir koruyucunuz olduğundan emin olun.',
                delete: 'Anladım, yine de kaldır',
                cancel: 'İptal',
            },
        },
    },
    email: {
        title: 'E-posta Adresinizi Girin',
        subtext:
            'Clave hesabınızın güvenliği ve önemli güncellemeler hakkında size bilgi verecektir.',
        send_error: 'Kod gönderilemedi, lütfen tekrar deneyin',
        invalid_email: 'Lütfen geçerli bir e-posta adresi girin',
        same_mail: 'Bu e-posta adresini zaten kullanıyorsunuz',
        already_registered: 'E-posta zaten kayıtlı, başka bir tane deneyin.',
        label: 'E-posta Adresi',
        placeholder: 'example@gmail.com',
        continue: 'Devam Et',
        otp_code: {
            title: 'E-postanızı Doğrulayın',
            subtext:
                'Lütfen, e-posta adresinize gönderdiğimiz doğrulama kodunu girin',
            invalid_otp_code: 'Geçersiz Kod',
            resend_in: 'Kodu tekrar gönder',
            seconds: 'saniye içinde',
            resend: 'Kodu Tekrar Gönder',
            continue: 'Devam Et',
            verify: 'E-postanızı Doğrulayın',
        },
    },
    onboarding: {
        tour: {
            skip: 'Atla',
            deposit: 'Para Yatırma',
            back: 'Geri',
            save: 'Kaydet',
            step0_title: 'Anahtar Kartlarına Giriş',
            step0_text1:
                'Anahtar Kartları ile, biyometrik kimlik doğrulama kullanarak hesabınıza sorunsuz bir şekilde giriş yapabilirsiniz.',
            step0_text2:
                'Giriş yapmak için herhangi bir şifre belirlemenize veya hatırlamanıza gerek yoktur.',
            step1_title: 'Sıfır Ücretin Keyfini Çıkarın!',
            step1_text1:
                'Kullanıcı adları veya bağlantılar kullanarak gönderim, talep ve takas işlemleri ağ ücreti olmadan gerçekleştirilebilir.',
            step1_text2:
                'Clave ile Web3’ün tam potansiyelini açığa çıkarmak için Hub’ı keşfedebilirsiniz!',
            step2_title: 'Kullanıcı Adınızı Belirleyin',
            step2_text1: 'Clave’de sadece kullanıcı adlarına ihtiyacınız var.',
            step3_title: 'Cüzdanınızı Finanse Edin',
            step3_text1:
                'En basit yol, başka bir cüzdandan veya zkSync Era üzerindeki bir borsadan kripto transfer etmektir. Hesap adresinizi Profilden kopyalayabilirsiniz.',
            step3_text2:
                "Diğer zincirlerdeki kripto paralar için, varlıkları hesabınıza hızlıca aktarmak için 'Para Yatırma'ya dokunun.",
        },
        tourv2: {
            skip: 'Atla',
            back: 'Geri',
            save: 'Kaydet',
            continue: 'Devam et',
            referral_activated: 'Referans aktive edildi',
            referral_button_title: 'Referans kodunuz var mı?',
            referral_button_subtitle:
                '5$ ve daha fazlasını kazanma şansı elde edin',
            referral_input_label: 'Referans Kodu',
            referral_input_placeholder: 'Kullanıcı adı',
            referred_by: 'Referans Kodu: *{{username}}',
            stepreferral_title: 'Referans Kodu',
            step1_title: 'Kullancı ismini belirle',
            step1_text1:
                'Kullanıcı adınızı belirleyerek ve zkSync Erada Clave hesabınıza para yatırarak başlayın.',
            step2_title: 'Bildirimleri Etkinleştir',
            step2_text1:
                'Gerçek zamanlı güncellemelerden haberdar olun. Gelen paralar, tamamlanan işlemler ve güvenlik güncellemeleri hakkında uyarı almak için bildirimleri etkinleştirin.',
            referral_item_1:
                'Kazanca ilk *{{deposit_amount}} yatırımına *{{reward_amount}} hediye',
            referral_item_2: 'Harcamalarından *{{reward_amount}} crypto iadesi',
            user_not_registered: 'Kullanıcı bilgileri tamamlanmadı',
            referral_valid: 'Referans kodu geçerli',
        },
        creation: {
            account_creation_done: {
                title: 'Bu kadar!',
                subtext: 'Clave hesabınıza hoş geldiniz.',
            },
        },
        login: {
            forgot_username: {
                invalid_email: 'Lütfen geçerli bir e-posta adresi girin',
                title: 'Kullanıcı Adını Unuttum',
                subtext:
                    'Clave size kullanıcı adınızı hatırlatacak bir e-posta gönderecek',
                label: 'E-posta adresi',
                placeholder: 'example@gmail.com',
                continue: 'Devam Et',
            },
            forgot_username_status: {
                success_title: 'Kullanıcı adınız için e-postanızı kontrol edin',
                success_subtext:
                    'Kullanıcı adınızı hatırlatmak için size bir e-posta gönderdik. E-postayı kontrol ettikten sonra hesabınıza tekrar erişebilirsiniz.',
                continue: 'Girişe git',
                try_again: 'Tekrar deneyin',
            },
        },
        recovery: {
            __description: 'Kurtarma akışını başlatma (talep etme)',
            enter_address: {
                title: 'Hesabınızı Kurtarın',
                subtext:
                    'Hesabınızı kurtarmak için Clave kullanıcı adını veya adresini girin.',
                label: 'Clave Kullanıcı Adı veya Adresi',
                forgot_username: 'Kullanıcı Adınızı mı Unuttunuz?',
                continue: 'Devam Et',
            },
            not_exist: {
                title: 'Bu cüzdanın kurtarma seçenekleri yok',
                subtext:
                    'Bu cüzdanın aktif bir yedeği veya atanmış koruyucusu yok. Kurtarma yapılamaz.',
                back: 'Geri',
            },
            started: {
                title: 'Kurtarma Başlatıldı',
                subtext:
                    'Önümüzdeki 48 saat içinde hesabınıza erişim sağlayabileceksiniz.',
                continue: 'Devam Et',
            },
            social_recovery_address: {
                title: 'Koruyucularınız ile Kurtarın',
                subtext:
                    'Koruyucunuzun Clave kullanıcı adını, ENS veya adresini girin.',
                fetch_guardians_error: 'Koruyucularınız alınamadı',
                enter_valid_address: 'Lütfen geçerli bir adres girin',
                registration_error: 'Yeni anahtar kartı oluşturulamadı',
                continue: 'Devam Et',
                not_guardian: 'Bu Adres Koruyucunuz Değil',
            },
            social_recovery_execute: {
                title: 'Kurtarmayı Tamamla',
                subtext:
                    'Koruyucunuza kurtarma talebi bağlantısını sağlayarak hesabınızı kurtarma sürecini başlatmasını sağlayın.',
                share: {
                    title: 'Kurtarma',
                    button: 'Paylaş',
                },
                back: 'Giriş sayfasına git',
            },
            social_recovery_start: {
                title: 'Koruyucuya Talebi Paylaş',
                subtext:
                    'Koruyucunuz talebinizi onayladığında, 48 saatlik bekleme süresinden sonra kurtarma sürecini tamamlayabilirsiniz.',
                share: {
                    title: 'Kurtarma',
                    button: 'Paylaş',
                },
                back: 'Girişe Git',
            },
            guardian_input: {
                label: 'Clave Kullanıcı Adı / ENS / 0x Adresi',
                invalid: {
                    ens_address: 'Geçersiz ENS adresi',
                    address: 'Geçersiz adres',
                    username: 'Geçersiz kullanıcı adı',
                    guardian: 'Bu adres koruyucu değil',
                },
                resolved: 'Adres: {{address}}',
            },
        },
        landing: {
            __description: 'Uygulamanın ilk sayfası',
            log_in: {
                button: 'Yeni Hesap Oluştur',
                recover: 'Hesabınızı Kurtarın',
                login: 'Giriş yap',
            },
            intro: {
                title: 'Clave’ye Hoş Geldiniz',
                description: 'Web3’e Tek Tıkla Giriş',
            },
            middle: {
                title: 'En Akıllı ve En Güvenli Hesaplar',
                description:
                    'Varlıklarınız donanım düzeyinde güvenlik ile korunur.',
            },
            last: {
                option1:
                    'Kullanıcı adları ve bağlantılar ile anında para gönderin ve alın',
                option2: 'Gas ücretini herhangi bir token ile ödeyin',
                option3:
                    'Kurtarma için arkadaşlarınızı koruyucu olarak ekleyin',
                option4: 'zkSync tarafından desteklenmektedir',
            },
        },
    },
    receive: {
        available: '{{amount}} {{symbol}} Mevcut',
        set_amount: 'İstek',
        title: 'İstek',
        share: {
            title: 'Cüzdan Adresi',
        },
        request_payment: 'Ödeme talep bağlantısı oluştur',
        continue: 'Devam Et',
        deeplink: {
            share: {
                title: 'Ödeme Talep Et',
                button: 'Bağlantıyı Paylaş',
            },
            title: 'Ödeme Talep Et',
            home: 'Ana Sayfa',
        },
    },
    send: {
        amount: {
            continue: 'Devam Et',
            insufficient: 'Yetersiz Bakiye',
            sending_to: 'Gönderilen kişi',
            could_not_estimate: 'Miktar tahmin edilemiyor',
            send: 'Gönder',
            title: 'Miktarı Belirle',
            title_link: 'Bağlantı ile Gönderim',
            sending_with_link: 'Bağlantı ile Gönderim',
            create_payment_link: 'Ödeme Bağlantısı Oluştur',
            set_amount: 'Miktarı Belirle',
            available: '{{amount}} {{symbol}} Mevcut',
        },
        link_created: {
            title: 'Ödeme Bağlantısı Hazır',
            description:
                'Bağlantı alıcısı parayı Clave hesabıyla talep edebilir.',
            link_title: 'Ödeme Bağlantısı',
            details_title: 'İşlem Detayları',
            amount: 'Miktar',
            token: 'Token',
            share: {
                title: '{{link}}',
                button: 'Bağlantıyı Paylaş',
            },
            share_link: 'Bağlantıyı Paylaş',
            home: 'Ana Sayfa',
        },
        claim_link: {
            title: 'Fonları Talep Et',
            subtext: '{{amount}} talep et',
            claim_button: 'Talep Et',
            home: 'Ana Sayfa',
            claiming_funds: 'Talep Ediliyor',
            already_claimed: 'Zaten Talep Edildi',
            error: {
                claim: 'Fonlar talep edilemedi',
                fetch: 'Bağlantı detayları alınamadı',
            },
            notification: 'İşlem başarıyla gönderildi.',
        },
        link_claimed: {
            title: 'Fonlar talep edildi',
            subtext: '{{amount}} başarıyla alındı',
            home: 'Ana Sayfa',
        },
        created_links: {
            create_new_link: 'Yeni Bağlantı Oluştur',
            list_header: 'Oluşturduğunuz Bağlantılar',
            title: 'Ödeme Bağlantıları',
            no_links: 'Talep edilmemiş bağlantınız yok',
            no_link_button: 'Ana Sayfa',
        },
        enter_address: {
            title: 'Alıcıyı Girin',
            error_invalid_address: 'Lütfen geçerli bir adres girin',
            error_invalid_username: 'Lütfen geçerli bir kullanıcı adı girin',
            resolved: '{{address}} adresine çözüldü',
            label: 'Clave Kullanıcı Adı / ENS / Adres',
            continue: 'Devam Et',
            contacts: 'Kişiler',
            clear: 'Temizle',
            clear_history: 'Geçmişi Temizle',
            clear_history_message: 'Emin misiniz?',
            cancel: 'İptal',
            no_results:
                'Sonuç bulunamadı. Alıcı adresini bilmiyorsanız, para göndermek için bağlantı oluşturabilirsiniz',
            search_results: 'Arama Sonuçları',
            recently_sended: 'Son Gönderilenler',
            send_with_link: 'Bağlantı ile Gönder',
        },
        qr_scan: {
            invalid_qr: 'Geçersiz QR kodu',
        },
        send_with_link_bottomsheet: {
            title: 'Bağlantı ile gönderim',
            description:
                "Para içeren bir bağlantı oluşturacaksınız. Clave hesabı olan herkes bu parayı talep edebilir. Ödeme bağlantılarınızı Ana Sayfa'dan kontrol edebilir ve isterseniz iptal edebilirsiniz.",
            button: 'Anladım, devam et',
            never_show: 'Bir daha gösterme',
        },
    },
    dashboard: {
        address: 'Adresi görüntülemek için dokunun',
        card: {
            title: 'Hesap Bakiyesi',
            activate: 'Hesabı Aktive Et',
        },
        actions: {
            request: 'İstek',
            send: 'Gönder',
            swap: 'Takas',
        },
        recovery_alert_item: {
            social: 'Hesabınız için sosyal kurtarma başlatıldı. 48 saat içinde iptal edilmezse erişiminizi kaybedeceksiniz. İptal etmek için buraya dokunun.',
        },
        token_amount: {
            available: 'Bakiye',
        },
        estimated_quantity: 'Tahmini Miktar:',
        portfolio: {
            my_tokens: 'Tokenlar',
            my_positions: 'Pozisyonlar',
            earning: 'APR: {{apr}}%',
        },
    },
    settings: {
        main: {
            title: 'Ayarlar',
            version: 'Clave Sürümü:',
        },
        profile: {
            main: {
                title: 'Profil',
                account_settings: 'Hesap Ayarları',
                banner: {
                    first_banner: 'Clave-in sana faydaları',
                    second_banner: 'Davet et ve kazan',
                },
            },
            invite: {
                total_earned: 'Toplam Kazanç',
                total_referees: 'Toplam Referanslar',
                invite_earn: 'Davet et ve kazan',
                ref_code: 'Referans Kodu',
                what_you_get: 'Ne Kazanırsın',
                what_they_get: 'Ne Kazanırlar',
                first_benefit:
                    'Onların ödediği feelerden *{{amount}} kripto kazan',
                second_behefit:
                    'Kazanca yatırdıkları ilk *{{amount2}} için *{{amount1}} kazan',
                third_benefit: 'Ödedikleri feelerden *{{amount}} kripto kazan',
                best_way_refer: 'Referans olmanın en iyi yolu:',
                send_them_dollar: 'Onlara para gönderme linki yolla',
            },
            saved_with_clave: {
                title: 'Clave kullanıcısı olduğunuz için teşekkürler{{name}}',
                tx_title: 'İşlemler',
                tx_text: 'Clave sponsorluğunda {{txCount}} işlem',
                earn_title: 'Kazanç Pozisyonları',
                earn_text: 'Toplam kazançlarınız',
                earn_cta: 'Kazanmaya Başla',
                button: 'X’de Paylaş',
            },
            card: {
                address: 'Adres',
                address_copied: 'Adres Kopyalandı',
                set_username: 'Kullanıcı Adı Belirle',
                no_username: 'Kullanıcı adı yok',
                copy_address: 'Adresi Kopyala',
            },
            rewards: {
                title: 'Rozetler & Ödüller',
                subtext: '',
            },
            social_recovery: {
                title: 'Hesap Güvenliği',
                subtext: '',
            },
            backup: {
                title: 'Sosyal Yedekleme',
                subtext: 'Koruyucularınızı görüntüleyin ve yapılandırın',
            },
            connected_dapps: {
                title: 'Bağlı Dapps',
                subtext: 'WalletConnect oturumlarını yönetin',
            },
            settings: {
                title: 'Ayarlar',
                subtext: 'Uygulama özelleştirmelerine erişin',
            },
            logout: 'Çıkış yap',
            logout_subtext: 'Hesabınızdan çıkış yapın',
            logout_sure: 'Emin misiniz?',
            cancel: 'İptal',
        },
        group: {
            __description: 'Ayar grubu başlıkları',
            app_settings: 'Uygulama Ayarları',
            share: 'Paylaş & Yardım',
            advanced: 'Gelişmiş Ayarlar',
        },
        advanced: {
            logs: {
                title: 'Kayıtlar',
                subtext: '',
            },
            delete_account: {
                title: 'Hesabı Sil',
                subtext: 'Clave hesabınızı silin',
                confirm:
                    'Hesabınızı silmek istediğinizden emin misiniz? Hesabınıza artık erişemezsiniz.',
                cancel: 'İptal',
                delete: 'Sil',
                delete_error: 'Hesabınız silinemedi',
            },
        },
        notifications: {
            title: 'Bildirimler',
            subtext: 'Bildirim tercihlerini yönetin',
        },
        preferences: {
            title: 'Tercihler',
            subtext: 'Para birimi ayarları',
            language: 'Dil',
            and_more: ', ve daha fazlası',
            update_fail:
                'Bildirim tercihleri güncellenemedi, lütfen tekrar deneyin',
            notification: 'Bildirimler',
            allow_notifications_title: 'Bildirimlere İzin Ver',
            allow_notifications_subtext: '',
            notify_guardians_title: 'Koruyucuları Bildir',
            notify_guardians_subtext: '',
            show_balance: 'Bakiye Görünürlüğü',
            show_balance_subtext: 'Ana sayfanızdaki bakiyeleri gizleyin',
            theme: 'Tema',
            theme_options: 'Tema ve simgeyi özelleştir',
            appearance: 'Görünüm',
            icon: 'Simge',
            advanced: 'Gelişmiş',
            advanced_subtext: 'Clave için daha gelişmiş ayarlar',
        },
        share: {
            title: 'Clave’yi Paylaş',
            subtext: 'Clave’yi arkadaşlarınızla paylaşın',
        },
        feedback: {
            title: 'Bize geri bildirim verin',
            subtext: 'Geri bildirimleriniz bizim için önemlidir',
        },
        twitter: {
            title: 'Bizi takip edin',
            subtext: 'Twitter’da (X) bizi takip edin',
        },
        about: {
            title: 'Clave Hakkında',
            subtext: 'Şartlar, gizlilik ve kanallar',
            terms_and_conditions: {
                title: 'Şartlar ve Koşullar',
                subtext: '',
            },
            privacy_policy: {
                title: 'Gizlilik Politikası',
                subtext: '',
            },
        },
        balance: {
            title: 'Bakiye',
            show_balances_title: 'Bakiyeleri Göster',
            show_balances_subtext: '',
            hide_zero_balances_title: 'Sıfır Bakiyeleri Gizle',
            hide_zero_balances_subtext: '',
        },
        share_help: {
            twitter: 'X’de bizi takip edin',
            twitter_subtext: '',
            discord: 'Discord’da bize katılın',
            discord_subtext: '',
            telegram: 'Telegram’da bize katılın',
            telegram_subtext: '',
        },
    },
    swap: {
        fetch_error: 'Teklif getirilemedi',
        impact: 'Fiyat etkisi {{impact}}%',
        insufficient: 'Yetersiz Bakiye',
        status: {
            title: 'Takas Tamamlandı',
            subtext: 'Takas işlemi başarıyla tamamlandı',
            home: 'Ana Sayfa',
            add_token_error: 'Token listenize eklenemedi',
        },
        fee: {
            bottom_sheet: {
                title: 'Takas Ücretleri',
                subtext: 'Bu takas teklifine %0,5 ücret dahildir.',
                understand: 'Anladım',
            },
        },
        swap_box: {
            insufficient: 'Yetersiz Bakiye',
            max: 'Maks',
            balance: 'Bakiye: ',
            select_token: 'Token seçin',
        },
        confirm: {
            title: 'Takası İnceleyin',
            from: 'Gönderen',
            to: 'Alıcı',
            rate: 'Oran',
            total_fee: 'Toplam ücret',
            fees: 'Ücretler',
            function_name: 'Takas',
            gas_fee: 'Ağ Ücreti',
            clave_fee: 'Clave Ücreti',
            continue: 'Devam Et',
            cancel: 'Taksı İptal Et',
        },
        quote_info: {
            quote: 'Teklif {{seconds}} saniye içinde yenilenir',
            seconds: 'saniye',
        },
        review: {
            title: {
                main: 'Takas',
                input: 'Gönderen',
                output: 'Alıcı',
            },
            continue: 'Takası İnceleyin',
        },
        settings: {
            bottom_sheet: {
                title: 'Maksimum Kayma',
                subtext:
                    'Kayma, beklenen ve gerçekleştirilen ticaret fiyatları arasındaki farkı ifade eder ve likidite değişikliklerinden etkilenir. Optimal ticaret yürütmesi için kayma toleransını dikkatle ayarlayın.',
                save: 'Kaydet',
            },
            title: {
                input: 'Takası başlat',
                output: 'Takas ile',
            },
        },
    },
    walletconnect: {
        connected_dapps: {
            title: 'Bağlı Dapps',
            subtext:
                'Bağlı merkezi olmayan uygulamalarınız aşağıda gösterilmektedir',
            disconnect: 'Bağlantıyı Kes',
        },
        empty_state: {
            title: 'Bağlı Dapps Yok',
            subtext: '',
        },
        title: '{{name}} bağlanmak istiyor',
        invalid_chain: 'Geçersiz zincir',
        connect: 'Bağlan',
        connected: 'Başarıyla bağlandı',
        application: 'Uygulama',
        send_requests: 'Onaylar için istek gönderir',
        see_activity: 'Bakiye ve etkinliği görür',
        send_transaction: 'Adınıza işlem gönderir',
        signature_request: 'İmza Talebi',
        accept: 'Bağlanmak için kaydırın',
        reject: 'Reddet',
        no_camera_title: 'Kamera İzni Yok',
        no_camera_subtitle: 'QR kodunu taramak için lütfen kamerayı açın',
        no_camera_button: 'Ayarları Aç',
        swipe: 'Devam etmek için kaydırın',
        release: 'Bırak',
        proceed: 'Devam etmek için kaydırın',
        invalid_qr_code: 'Geçersiz QR Kodu',
        mismatch: 'Alan adı uyuşmazlığı',
        mismatch_subtext:
            'Bu web sitesinin alan adı, bu isteğin göndericisiyle eşleşmiyor. Onaylamak, fon kaybına yol açabilir.',
        not_verified: 'Doğrulanamadı',
        not_verified_subtext:
            'Bu alan adı doğrulanamıyor. Onaylamadan önce isteği dikkatlice kontrol edin',
        network: 'Ağ',
        Account: 'Hesap',
    },
    history: {
        main: {
            title: 'İşlem Geçmişi',
            no_transactions: 'İşlem bulunamadı',
            load_more_transactions: 'Daha Fazla İşlem Yükle',
            see_all: 'Hepsini Görüntüle',
            preparing_transactions: 'İşlem Geçmişiniz Hazırlanıyor',
        },
        transaction: {
            from: '{{user}} gönderdi',
            to: '{{user}} aldı',
            self: 'Ben',
            failed: 'Başarısız',
            transfer: 'Transfer',
            guardian_added: 'Koruyucu eklendi',
            contract_interaction: 'Sözleşme etkileşimi',
            guardian_removed: 'Koruyucu kaldırıldı',
            transfer_link_created: 'Ödeme bağlantısı oluşturuldu',
            transfer_link_claimed: 'Bağlantıdan talep edildi',
            claimed_by_user: '{{user}} tarafından talep edildi',
            created_by_user: '{{user}} tarafından oluşturuldu',
            swap: 'Takas',
            fail: 'Başarısız',
            earnDeposit: 'Kazanca Yatır',
            earnWithdraw: 'Kazançtan Çek',
            earnClaim: 'Kazançtan Talep Et',
            earnMigrate: 'Fonları Taşı',
            delegated_zk_tokens: 'ZK Delege Edildi',
            deposit: 'Yatırma',
            earnWithdrawRequest: 'Çekme Talebi',
            referral: 'Referans',
            cashback: 'Kripto İade',
            details: {
                me: 'ben',
                tx_type: 'İşlem Türü',
                token_sent: 'Gönderilen Token',
                token_received: 'Alınan Token',
                recipient: 'Alıcı',
                sender: 'Gönderen',
                token_type: 'Token Türü',
                transaction_success: 'İşlem Başarılı',
                transaction_fail: 'İşlem Başarısız',
                guardian_name: 'Koruyucu Adı',
                sent_to_or_from: '{{sentOrReceived}} {{type}} {{user}}',
                add_token: 'Token Ekle',
                token_swapped: 'Tokenlar takas edildi',
                reclaim_funds: 'Fonları Geri Al',
                reclaim_in_time: '{{time}} içinde geri al',
                gas_fee: 'Ağ Ücreti',
                payment_link: 'Ödeme Linki',
                referral: 'Referans',
                earn_details: {
                    earn_subtitle: '{{protocol}}de {{tokenSymbol}}',
                    withdraw_title: '{{amount}} çek',
                    deposit_title: '{{amount}} yatır',
                    claim_title: '{{amount}} ödül toplandı',
                    migrate_title: 'Fonları Taşı',
                    withdraw_request_title: '{{amount}} çekme talebi',
                },
                delegated_to_clave: "Clave'e delege edildi",
                delegation: 'Delegasyon',
                deposit_details: {
                    title: '{{amount}} Yatırıldı',
                },
            },
            pending: {
                timeout: 'Bir şeyler ters gitti',
                pending: 'Bekliyor',
                sending_funds: 'Fonlar gönderiliyor',
                claiming_funds: 'Fonlar talep ediliyor',
                swapping_tokens: 'Tokenlar takas ediliyor',
                sending_transaction: 'İşlem gönderiliyor',
            },
        },
        no_transaction: {
            title: 'Herhangi bir işleminiz yok.',
        },
        error: {
            fetch_error: 'İşlem geçmişi alınırken bir hata oluştu',
        },
    },
    browser: {
        title: 'Tarayıcı',
        search: 'Bir Dapp ara',
        empty_state_favorites: 'Hızlı erişim için dapp’leri favorilere ekleyin',
        favorites: 'Favoriler',
        search_placeholder: 'Arama yapın veya siteyi girin',
    },
    recover: {
        __description:
            'Koruyucu, bağlantıyı aldıktan sonra kurtarma akışını takip eder',
        title: 'Talep Edilen Kurtarma',
        subtext: 'Kurtarmak istiyor musunuz?',
        function_name: 'Kurtar',
        accept: 'Kurtarma Talebini Kabul Et',
        decline: 'Reddet',
        cancel: {
            home: 'Ana Sayfa',
            title: 'Kurtarma sürecini iptal ettiniz!',
            subtext:
                'Koruyucunuzun kurtarmayı tekrar başlatmasını istemiyorsanız, onları Yedekleme sayfasından kaldırabilirsiniz.',
        },
        execute: {
            title: 'Kurtarmayı Tamamla',
            subtext:
                '48 saatlik bekleme süresi geçti ve kurtarma sürecini tamamlayabilirsiniz.',
            function_name: 'Kurtarma İşlemini Tamamla',
            approve: 'Kurtarmayı Tamamla',
            decline: 'Reddet',
        },
        reject: {
            title: 'Kurtarma talebini reddettiniz!',
            subtext: 'Kurtarma başlatılmayacak.',
            home: 'Ana Sayfa',
        },
        start: {
            user_title: 'Kurtarma başarıyla başlatıldı',
            someone_title: 'Kurtarma zaten başlatıldı',
            user_subtitle:
                '48 saatlik bekleme süresinden sonra kurtarma süreci tamamlanabilir.',
            home: 'Ana Sayfa',
        },
        sign_bottom_sheet: {
            title: 'İmza Talebi',
            description:
                'Bu mesajı imzalamak, bu hesabı koruyucu olarak kurtarmayı kabul ettiğinizi onaylar. Bu hesap 48 saatlik bekleme süresinde kurtarmaya hazır olacaktır. Daha sonra, size gönderilen aynı bağlantıdan kurtarmayı tamamlayabilirsiniz.',
            release: 'Kabul Edildi',
            sign: 'İmzala',
        },
    },
    set_username: {
        __description:
            'Profil veya başlangıçtan kullanıcı adı belirleme sayfası',
        title: 'Kullanıcı Adı Belirle',
        subtext: 'Clave’de sadece kullanıcı adlarına ihtiyacınız var.',
        placeholder: 'Kullanıcı Adını Girin',
        label: 'Kullanıcı Adı',
        continue: 'Kullanıcı Adını Belirle',
        later: 'Daha Sonra Hatırlat',
    },
    complete_account: {
        title: 'Hesap Bilgilerini Tamamla',
        subtitle:
            'Arkadaşlarınızı davet edebilmek için hesap bilgilerinizi tamamlamanız gerekmektedir',
        back: 'Geri',
        select_username: 'Kullanıcı adı seçin',
        profile_pic: 'Profile fotoğrafı ekleyin',
        guardian: 'Koruyucu ekleyin',
    },
    token_selection: {
        __description: 'Gönder & talep işlemlerinde token seçimi sayfası',
        send: 'Token seçin',
        request: 'Token seçin',
    },
    transaction: {
        __description: 'İşlem gönderildiğinde izlenen akışa ait çeviriler',
        approve: {
            title: 'Özet',
            back: 'Geri',
            type: 'Tür',
            sender: 'Gönderen',
            recipient: 'Alıcı',
            gas_token: 'Ücret ödenen token',
            approve: 'Harcamayı onayla',
            contract_interaction: 'Sözleşme etkileşimi',
            paid_by: 'Ağ Ücreti Ödeyen',
            paid_with: 'Ağ Ücreti ile Ödenen',
            estimated_gas_fee: 'Ağ Ücreti',
            amount: 'Miktar',
            contract_address: 'Sözleşme Adresi',
            swipe: 'Onaylamak için kaydırın',
            insufficient_balance: 'Yetersiz bakiye',
            free: 'Ücretsiz',
            approve_token: 'Token Onayla',
            delegate: 'Delege et',
        },
        fee: {
            title: 'İşlem Ücreti',
            proceed: 'Devam Et',
            total_gas_fee: 'Toplam Ağ Ücreti',
            free: 'Ücretsiz',
            pay_option: 'Öde',
        },
        status: {
            success: 'İşlem Başarılı',
            failed: 'İşlem Başarısız',
            home: 'Ana Sayfa',
            details: 'İşlem detayları',
            link: {
                first: 'Aç',
                second: 'işlem detayları',
                third: 'blockchain gezgininde.',
            },
            link_left: 'İşlem detaylarınızı görmek için',
            link_right: 'gezgininde açın.',
            tx_link: 'TX bağlantısı',
            time: 'Zaman',
            token_amount: 'Token Miktarı',
            gas_fee: 'Ağ Ücreti',
        },
        estimating_gas_fee: 'Ağ Ücreti Hesaplanıyor',
        reject: 'Reddet',
        release: 'Bırak',
        estimate_gas_failed: 'İşlem başarısız olacak gibi görünüyor',
        notification: 'İşlem başarıyla gönderildi.',
    },
    navbar: {
        home: 'Ana Sayfa',
        hub: 'Hub',
        profile: 'Profil',
    },
    custom_token: {
        __description:
            'Portföyde Token Ekle düğmesine basıldığında açılan alt sayfa',
        token_address: 'Adres',
        token_name: 'Adı',
        add: 'Özel Token Ekle',
        invalid_address: 'Geçersiz adres',
        error: 'Token eklenemedi',
        max_custom_token: 'En fazla 30 özel token ekleyebilirsiniz',
        token_already_exists: 'Token zaten mevcut',
        search: 'Token ara',
        add_manually: 'Manuel Ekle',
    },
    portfolio: {
        __description: 'Portföy sayfası ve token detayları',
        available: 'Mevcut',
        about_token: '{{token}} hakkında',
        no_chart_data: 'Grafik verisi yok',
        market_cap: 'Piyasa Değeri',
        volume: 'Toplam Hacim',
        my_tokens: 'Tokenlar',
        my_positions: 'Pozisyonlar',
        header: 'Portföyüm',
        add_custom_token: 'Token Ekle',
        day: '1G',
        week: '1H',
        month: '1A',
        year: '1Y',
        actions: {
            send: 'Gönder',
            request: 'İstek',
            swap: 'Takas',
            delegated: 'Delete edildi',
            delegate: 'Delege et',
            notify: {
                delegated: "Clave'e başarıyla delege edildi",
            },
            earn: '%{{apr}} APR ile {{symbol}} kazanabilirsiniz',
        },
    },
    empty_state: {
        no_results: 'Sonuç bulunamadı',
    },
    sign: {
        title: 'İmza Talebi',
        swipe: 'Onaylamak için kaydırın',
        reject: 'Reddet',
    },
    split: {
        create_group: {
            create_new: 'Yeni Grup Oluştur',
            group_name: 'Grup Adı',
            enter_group_name: 'Grup adını girin',
            create: 'Oluştur',
            create_error: 'Bölünmüş grup oluşturulamadı',
        },
        groups: {
            title: 'Böl',
            subtext:
                'Arkadaşlarınızla bir grup oluşturup faturaları ve ödemeleri bölüşebilirsiniz.',
            no_groups: 'Grubunuz yok',
            add: 'Yeni Grup Oluştur',
            join_error: 'Gruba katılamadınız',
            members: '{{count}} kişi',
            alert: {
                title: 'Gruba Katıl',
                sure: 'Emin misiniz?',
                cancel: 'İptal',
                join: 'Katıl',
            },
        },
        group: {
            participants: 'Katılımcılar',
            update_error: 'Grup adı güncellenemedi',
            add_payment: 'Ödeme Ekle',
            created: {
                info: {
                    members: 'Üyeler',
                },
            },
            edit: {
                title: 'Grubu Düzenle',
                label: 'Adı',
                members: 'Üyeler',
                leave: {
                    title: 'Gruptan Ayrıl',
                    subtext: '',
                    disabled: {
                        subtext: {
                            owe: 'Önce borçlarınızı ödemeniz gerekiyor',
                            owed: 'Önce alacaklarınızı toplamanız gerekiyor',
                        },
                    },
                },
                delete: {
                    title: 'Grubu Sil',
                    subtext: 'Grubu silmek geri alınamaz.',
                },
            },
            delete: {
                alert: {
                    error: 'Grup silinemedi',
                },
                title: 'Bölünmüş Grubu Sil',
                subtext: 'Emin misiniz?',
                delete: 'Evet, sil',
                cancel: 'İptal',
            },
            leave: {
                alert: {
                    error: 'Gruptan ayrılamadınız',
                },
                title: 'Gruptan Ayrıl',
                subtext: 'Emin misiniz?',
                leave: 'Evet, ayrıl',
                cancel: 'İptal',
                disabled: {
                    subtext: {
                        owe: 'Önce borçlarınızı ödemeniz gerekiyor',
                        owed: 'Önce alacaklarınızı toplamanız gerekiyor',
                    },
                },
            },
            join: {
                participants: '{{count}} Katılımcı',
                subtext: '{{name}} grubuna davet edildiniz.',
                accept: 'Kabul Et',
                cancel: 'Reddet',
            },
        },
        invite: {
            card: {
                invite: 'Arkadaşlarınızı Davet Edin',
                description: 'Bağlantıyı kopyalayın veya paylaşın',
            },
        },
        payments: {
            title: 'Son Ödemeler',
            no_payments: 'Herhangi bir ödemeniz yok',
            paid_by: '{{name}} tarafından ödendi',
            delete: {
                alert: {
                    error: 'Ödeme silinemedi.',
                    success: 'Ödeme başarıyla silindi!',
                    title: 'Ödemeyi Sil',
                    subtext: 'Emin misiniz?',
                    delete: 'Sil',
                    cancel: 'İptal',
                },
            },
        },
        payment: {
            new: {
                title: 'Ödeme Ekle',
                subtext: 'Ödeme bilgilerini girebilirsiniz',
                too_long: 'Ad çok uzun, lütfen daha kısa bir ad kullanın.',
                too_small: 'Minimum tutar 0,10 $',
                label: {
                    name: 'Ad',
                    amount: 'Tutar',
                },
                continue: 'Devam Et',
                summary: {
                    paid: 'Ödendi',
                    members: 'Grup üyeleri',
                    complete: 'Tamamla',
                    more: 've {{count}} daha fazla',
                    title: 'Ödeme Özeti',
                    payer: 'Ödeyen',
                    equally: 'Eşit olarak bölündü',
                    per: 'kişi başına',
                },
            },
            option: {
                title: 'Ödeme Yöntemi?',
                crypto: 'Kripto ile Öde',
                cash: 'Nakit ile Ödendi',
                alert: {
                    cash: {
                        title: 'Nakit ile Ödendi',
                        sure: 'Seçili borçlar ödenmiş olarak işaretlenecek',
                        cancel: 'İptal',
                        pay: 'Onayla',
                    },
                },
            },
        },
        spending: {
            detail: {
                payer: 'Ödeyen',
                spenders: 'Eşit olarak bölündü',
            },
        },
        review: {
            debts: {
                title: 'Borçları Öde',
                subtext: 'Ödemek istediğiniz borçları seçebilirsiniz.',
                select: 'Hepsini seç',
                deselect: 'Hepsini kaldır',
                debt_to: 'Borçlu',
                no_debts: 'Henüz borcunuz yok',
                pay: 'Borçları Öde',
            },
        },
        who: {
            paid: {
                title: 'Ödeyen',
                label: 'Üye adı',
                me: 'Ben',
                members: 'Grup üyeleri',
            },
        },
        add_payment: {
            add: 'Ekle',
            new: 'Yeni ödeme',
            debt: 'Borç temizleme',
        },
        total_owed: {
            card: {
                title: {
                    creditor: 'Sizden borçlu',
                    debtor: 'Borçlusunuz',
                },
                symbol: '$',
                pay: 'Borçları Öde',
                no_debts: 'Borç Yok',
            },
        },
        select: {
            payer: {
                title: 'Ödeyen',
                me: 'Ben',
                members: 'Grup Üyeleri',
            },
            spenders: {
                title: 'Eşit olarak bölündü',
                members: 'Grup Üyeleri',
                select: 'Hepsini seç',
                deselect: 'Hepsini kaldır',
                continue: 'Devam Et',
            },
            token: {
                insufficient_balance: 'Yetersiz bakiye',
                pay: 'Borçları Öde',
                title: 'Kripto ile Öde',
            },
        },
        controller: {
            paid: 'Ödendi',
            other: 'Diğer',
            eat: 'Yemek',
            travel: 'Seyahat',
            ticket: 'Bilet',
            loan: 'Kredi',
            debt: 'Borç',
        },
    },
    qrinfo: {
        __description: 'QR Kod tarayıcı sayfası',
        connect: 'Bir Dapp’a Bağlan',
        send: 'Bir Adrese Gönder',
        aim: 'QR Koduna Nişan Al',
        you_can_scan: 'Tarayabilirsiniz',
    },
    share_bottom_sheet: {
        __description:
            'Gösterge tablosundaki adres düğmesine tıklandığında veya depozito seçildiğinde açılan alt sayfa',
        title: 'Hesabınız zkSync Era’da',
        share: {
            subtext:
                'Bu adresi para yatırmak veya istemek için kullanın. Bu adrese Ethereum veya diğer ağlardan para göndermeyin.',
            qrCode: 'Para yatırmak veya istemek için bu QR kodunu gösterin.',
            done: 'tamamlandı',
        },
    },
    deposit: {
        __description: 'Para yatırma sayfasına ait çeviriler',
        network: {
            __description: 'Para yatırma seçenekleri sayfası, ağlar listelenir',
            option: {
                no_fee: 'Ücretsiz',
                fee: 'Ücret: ${{fee}}',
                bridge_speed: 'Köprü Hızı: {{time}} dk ',
                recommended: 'Önerilen',
            },
            warning: {
                continue: 'Anladım, devam et',
                info: 'Transferi için, başka bir cüzdandan veya borsadan kopyaladığınız adrese {{ağ}} ağı üzerinde göndermeniz gerekmektedir.',
                amount: {
                    min: 'Min miktar',
                    max: 'Max miktar',
                },
            },
        },
        option: {
            __description:
                'Kullanıcının zksync veya diğer ağları seçtiği başlangıç para yatırma sayfasındaki alt başlık',
            wallets: 'Cüzdanlar',
            exchanges: 'Borsalar',
        },
        status: {
            title: 'Para Yatırma Durumu',
            no_deposits: 'Para yatırmalarınız burada erişilebilir olacak',
            add: 'Yeni Para Yatırma',
            back: 'Para yatırma konusunda yardıma ihtiyacım var',
            item: {
                title: '{{amount}} {{symbol}} {{network}} ağında',
                completed: 'Tamamlandı',
                pending: {
                    layerswap: 'Köprü transferi bekleniyor',
                    user: 'Kullanıcı transferi bekleniyor',
                    popup: 'Bekleniyor',
                },
                learn: 'Daha fazla öğrenmek için dokunun',
                deposit_address: 'Yatırma adresi',
                remove: {
                    title: 'Yatırma talebini sil',
                    subtext:
                        'Para yatırma talebini silerseniz, verilen adrese fon göndermemelisiniz. Her zaman yeni para yatırma işlemleri başlatabilirsiniz.',
                    continue: 'Devam et',
                    delete: 'Evet, sil',
                },
            },
        },
        support: {
            title: 'Destek Alın',
            subtext:
                'Para yatırma işlemiyle ilgili sorun yaşıyorsanız, Layerswap Destek ile iletişime geçin.',
            back: 'Destek Alın',
            time: {
                title: 'Para Yatırma Süreleri',
                text: 'Diğer ağlardan para yatırma, token ve ağa bağlı olarak 2 ila 30 dakika sürebilir.',
            },
            support: {
                title: 'Teknik Destek',
                text: 'Para yatırma işlevi Layerswap altyapısı ile sağlanmaktadır, bu yüzden destek sağlamak için en uygun olan onlardır.',
            },
        },
        start: {
            __description:
                'Kazanç sayfasında bakiye 0 olduğunda açılan alt sayfa',
            zksync: 'zkSync Era’da kripto paranız varsa, doğrudan Clave hesabınıza gönderebilirsiniz.',
            networks: {
                title: 'Diğer Ağlar',
                text: 'Diğer ağlardaki kripto paralarınızı para yatırma işlevi ile Clave’ye transfer edebilirsiniz.',
            },
            cex: {
                title: 'Merkezi Borsalar',
                text: 'Borsalarda kripto paralarınız varsa, onları da Clave’ye transfer edebilirsiniz.',
            },
            title: 'Kazanmaya Başlamak İçin Para Yatırma',
            subtext: 'Hesabınızı aşağıdaki yöntemlerle finanse edebilirsiniz',
            deposit: 'Para Yatırma',
        },
        token: {
            __description: 'Token seçimi sayfası',
            bottom_sheet: {
                title: 'Para Yatırma Tokeni',
            },
        },
        choose: {
            token: {
                title: 'Token seç',
            },
            network: {
                title: 'Ağı Seçin',
                no_deposits: 'Para yatırmalarınız burada erişilebilir olacak',
            },
        },
        new: {
            title: 'Yeni Para Yatırma',
            option: {
                wallets: 'Başka cüzdandan kripto yatırma',
                exchanges: 'Borsadan kripto yatırma',
            },
            pending: 'Bekleyen yatırmalar',
            initiate: 'Yeni Para Yatırma Başlat',
        },
        summary: {
            title: 'Fonları Transfer Et',
            info: {
                first: '{{token}} tokenini istediğiniz borsada {{network}} ağında gönderiniz.',
                second: 'Borsadan nasıl transfer edileceğini görmek için buraya tıkla.',
            },
            selected: 'Seçilen Token',
            deposit: {
                address: 'Para Yatırma Adresi',
            },
            amount: {
                min: 'Minimum tutar',
                max: 'Maksimum tutar',
            },
            receive: 'Alacağınız',
            time: {
                name: 'Tahmini zaman',
            },
            min: 'dk',
            continue: 'Para Yatırma Durumunu Görüntüle',
            network: {
                token: '{{network}} ağında {{token}}',
            },
        },
        work: {
            __description:
                'Para yatırma sayfası ilk ziyaret edildiğinde açılan alt sayfa',
            title: 'Para Yatırma Nasıl Çalışır?',
            subtext: {
                first: 'Clave hesabınız SADECE zkSync Era’da bulunmaktadır.',
                second: 'Fonları yatırmak için, başka bir zkSync hesabından transfer yapabilir veya diğer ağlardan transfer yapmak için bir köprü kullanabilirsiniz. Lütfen adımları dikkatlice takip edin.',
            },
            continue: 'Başlayın',
            zksync: {
                title: 'zkSync Era',
                text: 'zkSync Era’da kripto paranız varsa, doğrudan Clave hesap adresine gönderebilirsiniz.',
            },
            other: {
                title: 'Diğer Ağlar',
                text: 'Diğer ağlardan kripto yatırma başlatabilirsiniz.',
            },
            cex: {
                title: 'Merkezi Borsalar',
                text: 'Desteklenen ağlar aracılığıyla merkezi borsalardan kripto yatırma başlatabilirsiniz.',
            },
        },
    },
    invest: {
        __description: 'Kazanç sayfasına ait çeviriler',
        completedv2: {
            __description:
                'Kazançla ilgili işlemlerin sonuçlarını gösteren kazanç sayfası',
            title: {
                invest: 'Başarıyla Yatırıldı',
                withdraw: 'Başarıyla Çekildi',
                claim: 'Ödüller Çekildi',
                requestWithdraw: 'Çekme talebiniz alındı.',
            },
            subtext: {
                withdraw:
                    'Kazanç elde etmeye başlamak için her zaman para yatırabilirsiniz!',
                invest: 'Bu pozisyon için {{apy}}% APR kazanmaktasınız.',
                claim: 'Kazançlarınız toplandı\nve bakiyenize eklendi.',
                requestWithdraw:
                    'İstek başarıyla gönderildi.\nParanızı 10 gün sonra çekebileceksiniz.',
            },
            check: 'Kazançlarını incele',
            earn: 'Kazan',
            home: 'Ana Sayfa',
            deposited_amount: 'Yatırılan Miktar',
            withdraw_amount: 'Çekilen Miktar',
            weekly_earnings: 'Haftalık Beklenen Kazanç',
            reward_amount: 'Ödül Miktarı',
            lockup_time: 'Kilit Süresi',
            ten_days: '10 Gün',
        },
        options: {
            title: 'Kazanç',
            positions: 'Pozisyonlar',
            options: 'Mevcut Seçenekler',
            banner: {
                info: '$1000 ile {{earn}}$-a kadar kazanabilirsin',
                learn: 'Daha fazla öğrenmek için buraya dokunun',
            },
            category: {
                all: 'Tümü',
                featured: 'Öne Çıkan',
                stables: 'Stabil Coinler',
                zksummer: 'ZK Yazı',
            },
        },
        option: {
            manage: '{{protocol}} üzerinde',
            soon: 'Yakında',
        },
        migrate: {
            migrate: 'Taşı',
            title: '{{apy}}% APR Kazanç',
            title_rewards: 'Ödülleri Topla',
            subtitle:
                'Yeni Ether havuzu {{apy}}% APR kazan ile canlı. Lütfen fonlarınızı tek tıkla yeni havuza taşıyınız.',
        },
        position: {
            details: {
                amount: {
                    withdrawable: 'Çekilebilir Miktar',
                    zk_rewards: 'ZK Ödülleri',
                },
                apr: 'Yıllık Yüzde Oranı (APR)',
                apy: 'Yıllık Yüzde Getirisi (APY)',
                title: 'Pozisyon Detayları',
                increase: 'Pozisyonu Artır',
                withdraw: 'Çek',
                collect: 'Topla',
                advanced: {
                    managed: 'Yönetilen',
                    liquidity: 'Likidite',
                    token: 'Token',
                    tokens: 'Altta yatan tokenler',
                    pool: 'Havuz URL’si',
                    title: 'Pozisyon Detayları',
                    done: 'Tamamlandı',
                },
                earnings_disclaimer: '$ZK token cinsinden tahmini ödüller',
                earnings_disclaimer_compounded:
                    'Ödüller pozisyonlara dönüştürülür',
                rewards_disclaimer_both:
                    'Bileşik ve toplanabilir ödüller dahildir',
                rewards_disclaimer: 'Tüm ödüller dahil',
                lockup_ready: '{{amount}} çekime hazır',
                lockup_pending:
                    '{{amount}} {{date}} tarihinde çekime hazır olacak',
                share: `X'the Paylaş`,
            },
            information: {
                collectible: {
                    first: 'Bu pozisyonda tek tür kazanç var: Toplanabilir.',
                    second: 'Daha fazla öğrenmek için dokunun',
                },
                compounded: {
                    first: 'Bu pozisyonda tek tür kazanç var: Bileşik.',
                    second: 'Daha fazla öğrenmek için dokunun',
                },
                both: {
                    first: 'Bu pozisyonda iki tür kazanç var: Bileşik ve Toplanabilir.',
                    second: 'Daha fazla öğrenmek için dokunun',
                },
            },
        },
        deposit: {
            title: 'Kazanç',
            amount: 'Miktar',
            reward_tokens: 'Ödül Tokenleri',
            underlying_tokens: 'Bağlı Tokenler',
            protocol_fee: 'Protokol Komisyonu',
            apr_notice: 'APR market koşullarına bağlı olarak değişebilir',
            available: '{{balance}} {{symbol}} mevcut',
            weekly_earnings: 'Haftalık Beklenen Kazanç',
            max_staking: 'Tutar sınırı aşıyor',
            continue: 'Devam Et',
            insufficient: 'Yetersiz Bakiye',
            max_staking_alert: 'Adil kullanım için kalan limit: {{amount}}',
            position: 'Pozisyon detayları',
            set_amount: 'Miktar Belirle',
        },
        withdraw: {
            title: 'Çek',
            title_lockup: 'Çekme Talebi',
            estimate: 'Tahmini değer: {{value}}',
            available: '{{amount}} {{symbol}} mevcut',
            continue: 'Devam Et',
        },
        before: {
            deposit: {
                __description:
                    'Kullanıcı kazanç pozisyonu başlatmaya çalıştığında açılan bilgi alt sayfası',
                title: 'Devam Etmeden Önce',
                subtext:
                    'Stake sürecine başlamadan önce, bu bilgileri dikkatlice incelemek karar verme sürecinizde size rehberlik edecektir.',
                continue: 'Anladım',
                market: {
                    title: 'Düzenlenmemiş Piyasalar',
                    text: 'Kazanç, varlık kaybına yol açabilecek potansiyel riskleri olan Defi’yi kullanır. Clave, unhosted non-custodial bir cüzdandır. Kendi riskinizle yatırım yapın.',
                },
                yield: {
                    title: 'Her Dakika Kazanç',
                    text: 'Kazançlar havuzun etkinliğine bağlı olarak değişir ve günlük olarak değişebilir. Oran, son 24 saatte hesaplanan yıllıklaştırılmış getiri tahminidir.',
                },
                withdraw: {
                    title: 'Esnek Çekme',
                    text: 'Kazançlarınız sürekli olarak hesaplanacak ve istediğiniz zaman toplayabilir ve çekebilirsiniz.',
                },
            },
        },
        active: {
            position: {
                amount: 'Miktar',
            },
        },
        banner: {
            info: '$1000 ile ${{earn}} kadar kazanabilirsiniz',
            learn: 'Daha fazla öğrenmek için buraya dokunun',
        },
        collect: {
            earnings: {
                title: 'Kazançları Topla',
                subtext:
                    'Şu ana kadar {{earningAmount}} {{symbol}} kazandınız. Fonlarınızı çekerken ödülünüzü toplamak ister misiniz?',
                subtext_lockup:
                    'Bu havuzda sadece talep oluşturarak para çekebilirsiniz.',
                withdrawal: 'Çekim Miktarı',
                earnings: 'Kazançlar',
                withdraw: {
                    both: 'Topla ve Çek',
                    only: 'Sadece Çek',
                    bothRequest: 'Topla ve Talep Et',
                    request: 'Çekim Talep Et',
                    onlyRequest: 'Sadece Talep Et',
                },
                ten_days: '10 Gün',
                waiting_time: 'Bekleme Süresi',
                back: 'Geri',
            },
        },
        counter: {
            title: 'Tahmini Kazançlar',
        },
        how_it_works: {
            title: 'Kazanç Nasıl Çalışır?',
            subtext:
                'Clave, kripto paralarınızı kazanç seçeneklerini kullanırken kolay erişim sağlayan bir non-custodial cüzdandır.',
            defi: {
                title: 'DeFi Protokollerini Kullanma',
                text: 'Paranızın kontrolü sizde kalırken kazanç elde edebilirsiniz.',
            },
            withdraw: {
                title: 'Esnek Çekim',
                text: 'Varlıklarınızı kazançlarınızla birlikte istediğiniz zaman çekebilirsiniz.',
            },
            apr: {
                title: 'Dinamik APR',
                text: 'Kazanç, havuzun komisyonlarından gelir ve kullanımına göre dinamik olarak değişir.',
            },
            continue: 'Kazanmaya Hazır',
        },
        insufficient: {
            balance: {
                title: 'Yetersiz {{token}} Bakiyesi',
                subtext:
                    'Bu pozisyon hesabınızda {{token}} gerektirir. Tokenlarınızı Swap yoluyla {{token}} dönüştürebilir veya hesabınıza doğrudan {{token}} yatırabilir veya {{token}} satın alabilirsiniz.',
                swap: '{{token}} ile takas',
                deposit: '{{token}} yatır',
                buy: '{{token}} satın al (yakında)',
            },
        },
        yield: {
            information: {
                title: 'Nasıl kazanırsınız?',
                compound: {
                    title: 'Bileşik Kazanç',
                    text: '{{token}} ödüllerinden gelen bu kazanç doğrudan yatırılan miktara eklenir.',
                },
                collectible: {
                    title: 'Toplanabilir Kazanç',
                    text: 'Bu kazançlar altta yatan platform tarafından sağlanır ve çekim sırasında manuel olarak toplanmalıdır.',
                },
                continue: 'Kazanmaya Hazır',
            },
        },
        lockup_invest_bottom_sheet: {
            title: 'Sadece çekme talebi ile para çekebilirsiniz',
            subtext: 'Bu havuzda sadece talep oluşturarak para çekebilirsiniz.',
            text_1: 'Çekim bekleme süresi 10 gündür.',
            text_2: 'Çekilen paranın miktarını değiştirmeniz durumunda bekleme süresi yeniden başlayacaktır.',
            button: 'İlerle',
        },
        info_bottom_sheet: {
            title: '{{amount}} {{date}} tarihinde çekmeye hazır olacak.',
            title_ready:
                'Your pending withdraw request is ready to be processed',
            subtext: 'Bu havuzda sadece talep oluşturarak para çekebilirsiniz.',
            notice: 'Yeni talep oluşturduğunuzda, bu talep öncekinin üstüne eklenecek ve 10 günlük sayaç yeniden başlayacaktır.',
            new_withdraw: 'Yeni Çekme Talebi',
            continue: 'Kazanmaya Devam Et',
        },
    },
    hub: {
        __description: 'Hub Sayfası ve Gösterge Tablosunda Hızlı işlemler',
        title: 'Hub',
        all_actions: 'Tüm İşlemler',
        start_with: 'Öne Çıkanlar',
        widget: {
            title: 'Hızlı İşlemler',
            see_all: 'Hepsini Gör',
        },
        actions: {
            deposit: 'Para Yatırma',
            deposit_text: 'zkSync Era’da cüzdanınızı finanse edin',
            earn: 'Kazanç',
            earn_text: 'zkSync Era’da kripto paralarınızla kazanç elde edin',
            guardians: 'Koruyucuları Yönetin',
            guardians_text:
                'Arkadaşlarınızı ve güvendiğiniz kişileri koruyucu olarak ekleyin',
            browser: 'Tarayıcı',
            links: 'Ödeme Bağlantıları',
            split: 'Böl',
            buy: 'Satın Al',
            invest: 'Yatırım Yap',
            get_started: 'Başlayın',
            benefits: 'Clave-in sana faydaları',
            benefits_text: 'Faydaları incele',
        },
    },
    recovery_notice: {
        __description:
            'Kullanıcı kurtarmayı başlatmaya çalıştığında bilgi alt sayfası',
        title: 'Sosyal Kurtarma',
        subtext:
            'Bu cihazda hesabınıza erişiminiz varsa, bu adımdan sonra kaybedersiniz.',
        approval: 'Anladım',
    },
    zksync_notice_bottom_sheet: {
        title: 'zkSync Era {{network}}',
        subtext:
            'Yalnızca zkSync Era {{network}} üzerinde para yatırın. Ethereum veya başka bir zincirde bu hesaba para gönderirseniz, bu fonları kaybedersiniz.',
        approval: 'Anladım',
        never_show: 'Bir daha gösterme',
    },
    no_backup_bottom_sheet: {
        title: 'Yedekleme için Koruyucu Ekle',
        subtext:
            'Hesabınızı korumak için lütfen yedek bir koruyucu ekleyin. Bu, mevcut cihazınızı kaybederseniz erişimi yeniden kazanmanızı sağlar. Koruyucu olmadan hesabınıza erişemeyebilirsiniz.',
        approval: 'Koruyucu Ekle',
        cancel: 'Sonra hatırlat',
    },
    claim_link_bottom_sheet: {
        badge: 'Ödeme Al',
        badge_loading: 'Ödeme Alınıyor',
        sender: 'Gönderen',
        home: 'Ana Sayfa',
        claim: 'Ödeme Almak İçin Tıkla',
        already_claimed: 'Bu link daha\nönce alındı',
        failed_to_claim: 'Link ile ödeme\nalınamadı',
        claimed: 'Ödeme Alındı',
    },
    landing: {
        first: "Clave'e Hoş Geldiniz",
        firstSubtitle:
            'Kullanıcı adları ve ödeme bağlantıları kullanarak, herhangi birine, herhangi bir zamanda mesajlaşma kadar basit şekilde gönderin.',
        second: 'Anında, Ücretsiz,\n Global Transferler',
        secondSubtitle:
            'Kullanıcı adları ve ödeme bağlantıları kullanarak, herhangi birine, herhangi bir zamanda mesajlaşma kadar basit şekilde gönderin.',
        third: 'Paranızı Sahiplenin',
        thirdSubtitle:
            'Biyometrik verilerle  korunan güvenli bir akıllı hesap.',
        fourth: 'Tek tıkla Yatırım Yapın ve Kazanın',
        fourthSubtitle:
            'Biyometrik verilerle  korunan güvenli bir akıllı hesap.',
    },
    privacy_policy_bottom_sheet: {
        title: 'Gizlilik politikasını değişti',
        subtext:
            'Uygulamamızın gizlilik politikasını güncelledik. Clave kullanmaya devam etmek için en son sürüme göz atmak isteyebilirsiniz.',
        read: 'Gizlilik politikasını oku',
        approval: 'Onaylıyorum',
    },
    share_address_bottom_sheet: {
        title: 'ZKsync Adresiniz',
        qrCode: 'ZKsync üzerinde token almak için bu QR kodunu gösterin veya taratın',
        done: 'Tamam',
        share: {
            title: 'Önemli: Tokenleri sadece ZKsync üzerinde gönderin',
            subtext:
                'Diğer cüzdanlardan veya borsalardan ZKsync üzerinde token almak için adresinizi kullanın',
        },
    },
    send_on_zksync_bottom_sheet: {
        title: 'ZKSync ağında para gönder',
        description:
            'Para gönderdiğiniz adresin ZKsync ağında erişilebilir olduğundan emin olunuz. Aksi taktirde, gönderdiğiniz paranızı kaybedebilirsiniz.',
        accept: 'Gönderdiğim adres ZKsync destekliyor',
        button: 'Devam Et',
    },
};
