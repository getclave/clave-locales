/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import type { Locale } from './types';

export const tr: Locale = {
    locale: 'tr',
    general: {
        identifiers: {
            self: 'Ben',
        },
    },
    error_codes: {
        '0': 'Bilinmeyen',
        '1': 'Yetkisiz',
        '4': 'Bulunamadı',
        '600': 'Tekrar dene',
        '1001': 'Kullanıcı adı zaten alınmış',
        '1002': 'Kullanıcı adı çok kısa',
        '1003': 'Kullanıcı adı çok uzun',
        '1004': 'Kullanıcı adı bulunamadı',
        '1005': 'Email zaten kayıtlı',
        '1006': 'Email zaten gönderildi',
        '1007': 'Email gönderilemedi',
        '1008': 'Doğrulama kodu kullanıldı',
        '1009': 'Doğrulama kodu süresi doldu',
        '1010': 'Maksimum deneme sayısına ulaşıldı',
        '1011': 'Geçersiz doğrulama kodu',
        '1012': 'Kullanıcı bulunamadı',
        '1013': 'Genel anahtar bulunamadı',
        '1014': 'Email bulunamadı',
        '1015': 'Captcha doğrulanmadı',
        '1016': 'Bekleme listesi kodu bulunamadı',
        '1017': 'Bekleme listesi kodu zaten kullanılmış',
        '1018': 'Geçersiz bekleme listesi kodu',
        '1019': 'Geçersiz email',
        '1020': 'Sadece harfler ve sayılar kabul edilir',
        '1021': 'İmza doğrulanamadı',
        '1022': 'Yedek eklenemedi',
        '1023': 'Cüzdan dağıtılamadı',
        '1024': 'Tercihler güncellenemedi',
        '1025': 'Kayıt kodunun süresi doldu, lütfen yeniden başlayın',
        '1026': 'Kurtarma başlatılmadı',
        '1027': 'Kurtarma zaten başlatılmış',
        '1028': 'Kurtarma başlatılamadı',
        '1029': 'Kurtarma uygulanamaz',
        '1030': 'Kurtarma gerçekleştirilemedi',
        '1031': 'Yanlış şifre',
        '1032': 'Bulut yedeği bulunamadı',
        '1033': 'Bulut depolamaya yazma hatası',
        '1034': 'Bulut depolama verisi silinirken hata oluştu',
        '1035': 'Google ile giriş yapılamadı, lütfen daha sonra tekrar deneyin',
        '1036': 'En az 8 karakter gereklidir',
        '1037': 'Bir büyük harf ekleyin',
        '1038': 'Bir küçük harf ekleyin',
        '1039': 'Bir sayı ekleyin',
        '1040': 'Bir özel karakter ekleyin.',
        '1041': 'İmza verileri bozuk, lütfen daha sonra tekrar deneyin',
        '1042': 'Genel anahtar silinirken hata oluştu',
        '1043': 'Zaten bir harcama grubundasınız',
        '1044': 'Davet kodu geçersiz',
        '1045': 'Grup limiti aşıldı',
        '1046': 'Grup üye limiti aşıldı',
        '1047': 'Yetkiniz yok',
        '1048': 'Peanut bağlantısı talep edilirken hata oluştu',
        '1049': 'Cüzdan mevcut değil',
        '1050': 'Geçersiz meydan okuma',
        '1051': 'Giriş başarısız oldu',
        '1052': 'Kullanıcı kimlik doğrulamasını reddetti',
        '1053': 'Gaz limiti çok yüksek',
        '9000': 'Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin',
        '9001': 'İşlemi tamamlamak için yetersiz bakiye',
        '9002': 'İşlem doğrulanamadı. Lütfen daha sonra tekrar deneyin',
        '9003': 'İşlem geri çevrildi',
    },
    backup: {
        status: {
            added: {
                title: 'Güvenilir Kişiler Başarıyla Eklendi',
                subtext:
                    'Hesabınızı güvenilir kişileriniz ile 48 saatlik bekleme süresi sonunda kurtarabilirsiniz.',
            },
            removed: {
                title: 'Güvenilir Kişi Başarıyla Kaldırıldı',
                subtext:
                    'Yedekleme menüsünden her zaman yeni güvenilir kişiler ekleyebilirsiniz.',
            },
            done: 'Tamam',
        },
        social: {
            title: 'Sosyal Yedekleme',
            subtext:
                'Clave üzerindeki arkadaşlarınızı veya ZKsync Era ağındaki herhangi bir adresi güvenilir kişi olarak atayabilirsiniz.',
            'subtext-link': 'Daha fazla bilgi için dokunun.',
            'subtext-link-url':
                'https://blog.getclave.io/recovery-for-everyone-cloud-and-guardians',
            cancel: 'Yedeklemeyi İptal Et',
            add_new_guardian: 'Yeni Güvenilir Kişiler Ekle',
            add_guardian_max: 'Maksimum Güvenilir Kişi Limiti Aşıldı',
            your_guardians: 'Güvenilir Kişileriniz',
            guardian: {
                title: 'Güvenilir Kişiler Ekle',
                subtext:
                    'Güvenilir kişiler, hesabınızı başka bir cihazda kurtarmanıza yardımcı olabilir.',
                update_fail:
                    'Bildirim tercihleri güncellenemedi. Lütfen tekrar deneyin.',
                add_guardian: 'Güvenilir Kişiler Ekle',
                notify: 'Güvenilir Kişilere Bildir',
                add_another: 'Başka Bir Güvenilir Kişi Ekle',
                add: 'Devam Et',
            },
            current_email: 'Email',
            add_guardian_input: {
                own_address: 'Kendinizi güvenilir kişi olarak ekleyemezsiniz.',
                already_exists: 'Bu adres zaten bir güvenilir kişi.',
                label: 'Clave Kullanıcı Adı / ENS / 0x Adresi',
                invalid_ens_address: 'Geçersiz ENS adı',
                invalid_address: 'Geçersiz adres',
                invalid_username: 'Geçersiz kullanıcı adı',
                resolved: 'Adres: {{address}}',
            },
            notify_guardian_bottom_sheet: {
                title: 'Güvenilir Kişilere Bildirim Gönderiliyor',
                subtext:
                    'Sadece Clave kullanıcıları, güvenilir kişi olarak atandıklarında veya kaldırıldıklarında bildirim alabilirler.',
                continue: 'Anladım',
            },
            empty_state: {
                title: '',
                subtext:
                    'Sosyal Yedekleme için en az bir güvenilir kişi eklemelisiniz.',
            },
            remove_guardian_bottom_sheet: {
                title: 'Kaldırılan Güvenilir Kişi',
                subtext:
                    'Her zaman en az bir güvenilir kişiye sahip olduğunuzdan emin olun.',
                delete: 'Anladım, yine de kaldır',
                cancel: 'İptal',
            },
        },
    },
    email: {
        title: 'Email Adresinizi Girin',
        subtext:
            'Clave, hesabınızın güvenliği ve önemli güncellemeler hakkında sizi bilgilendirecek.',
        send_error: 'Kod gönderilemedi, lütfen tekrar deneyin',
        invalid_email: 'Lütfen geçerli bir email adresi girin',
        same_mail: 'Bu email adresini zaten kullanıyorsunuz',
        already_registered: 'Email zaten kayıtlı, başka bir tane deneyin.',
        label: 'Email Adresi',
        placeholder: 'example@gmail.com',
        continue: 'Devam Et',
        otp_code: {
            title: 'Email Adresinizi Doğrulayın',
            subtext:
                'Lütfen, email adresinize gönderdiğimiz doğrulama kodunu girin',
            invalid_otp_code: 'Geçersiz Kod',
            resend_in: 'Kodu tekrar gönder',
            seconds: 'saniye içinde',
            resend: 'Kodu Tekrar Gönder',
            continue: 'Devam Et',
            verify: 'Email Adresinizi Doğrulayın',
        },
    },
    onboarding: {
        tour: {
            skip: 'Atla',
            deposit: 'Yatır',
            back: 'Geri Dön',
            save: 'Kaydet',
            step0_title: 'Passkeylere Giriş',
            step0_text1:
                'Passkeyler ile hesabınıza biyometrik kimlik doğrulama kullanarak sorunsuz bir şekilde giriş yapabilirsiniz.',
            step0_text2:
                'Giriş yapmak için herhangi bir şifre ayarlamanız veya hatırlamanız gerekmez.',
            step1_title: 'Ücretsiz İşlemlerin Keyfini Çıkarın!',
            step1_text1:
                'Sadece kullanıcı adları veya bağlantılar kullanarak gönderim, talep etme ve takas işlemleri ağ ücretleri olmadan yapılır.',
            step1_text2:
                "Ayrıca Clave ile Web3'ün tam potansiyelini keşfetmek için Merkez'i inceleyebilirsiniz!",
            step2_title: 'Kullanıcı Adınızı Belirleyin',
            step2_text1:
                'Clave’de ihtiyacınız olan tek şey kullanıcı adlarıdır.',
            step3_title: 'Cüzdanınıza Fon Ekleyin',
            step3_text1:
                "En basit yol, ZKsync Era ağında başka bir cüzdandan veya borsadan kripto transferi yapmaktır. Hesap adresinizi Profil'den kopyalayabilirsiniz.",
            step3_text2:
                "Diğer zincirlerdeki kripto paralarınız için 'Yatır' düğmesine dokunarak varlıkları hızlıca hesabınıza aktarabilirsiniz.",
        },
        tourv2: {
            skip: 'Atla',
            back: 'Geri Dön',
            save: 'Kaydet',
            get_started: 'Başlayın',
            continue: 'Devam Et',
            step1_title: 'Kullanıcı Adınızı Belirleyin',
            step1_text1:
                'Clave’de para göndermek ve talep etmek için kullanıcı adınızı kullanabilirsiniz.',
            step2_title: 'Bildirimleri Etkinleştirin',
            step2_text1:
                'Gerçek zamanlı güncellemelerle haberdar olun. Gelen fonlar, tamamlanan işlemler ve güvenlik bildirimleri için uyarılar alın.',
            stepreferral_title: 'Bizi kim aracılığıyla buldunuz?',
            stepreferral_subtext: 'Ne kazanıyorsunuz',
            referral_button_title: 'Davet kodunuz var mı?',
            referral_button_subtitle: '5$ kazanma ve cryptoback fırsatı',
            referral_input_placeholder: 'Sizi davet eden kişinin kullanıcı adı',
            referral_input_label: 'Davet Kodu',
            referral_activated: 'Avantajlarınızı Görüntüleyin',
            referred_by: '*{{username}} tarafından davet edildi',
            referral_item_1:
                '*{{deposit_amount}} yatırdığınızda ilk *{{reward_amount}} kazanın',
            referral_item_2:
                'Ödediğiniz ücretler üzerinden *{{reward_amount}} geri ödeme',
            user_not_registered: 'Kullanıcı kaydını tamamladı',
            referral_valid: 'Davet kodu geçerli',
        },
        creation: {
            account_creation_done: {
                title: 'Hepsi Bu!',
                subtext: 'Clave hesabınıza hoş geldiniz.',
            },
        },
        login: {
            forgot_username: {
                invalid_email: 'Lütfen geçerli bir email adresi girin',
                title: 'Kullanıcı Adımı Unuttum',
                subtext:
                    'Clave, kullanıcı adınızı hatırlatan bir email gönderecek.',
                label: 'Email Adresi',
                placeholder: 'example@gmail.com',
                continue: 'Devam Et',
            },
            forgot_username_status: {
                success_title: 'Kullanıcı Adınızı Kontrol Edin',
                success_subtext:
                    'Bu email adresi bir kullanıcı adıyla ilişkiliyse, kısa süre içinde kullanıcı adınızı içeren bir email alacaksınız.',
                continue: 'Devam Et',
                try_again: 'Tekrar Dene',
            },
        },
        recovery: {
            __description: 'Kurtarma işleminin başlatılması',
            enter_address: {
                title: 'Hesabınızı Kurtarın',
                subtext:
                    'Hesabınızı kurtarmak için Clave kullanıcı adınızı veya adresinizi girin.',
                label: 'Clave Kullanıcı Adı veya Adres',
                forgot_username: 'Kullanıcı Adınızı mı Unuttunuz?',
                continue: 'Devam Et',
            },
            not_exist: {
                title: 'Bu cüzdanın kurtarma seçenekleri yok',
                subtext:
                    'Bu cüzdanın etkin bir kurtarma seçeneği veya atanmış güvenilir kişileri yok. Kurtarma yapılamaz.',
                back: 'Geri Dön',
            },
            started: {
                title: 'Kurtarma Başlatıldı',
                subtext:
                    'Önümüzdeki 48 saat içinde hesabınıza erişim sağlayacaksınız.',
                continue: 'Devam Et',
            },
            social_recovery_address: {
                title: 'Güvenilir Kişilerinizle Kurtarın',
                subtext:
                    "Güvenilir kişinizin Clave kullanıcı adını, ENS'ini veya adresini girin.",
                fetch_guardians_error: 'Güvenilir kişiler alınamadı',
                enter_valid_address: 'Lütfen geçerli bir adres girin',
                registration_error: 'Yeni Passkey oluşturulamadı',
                continue: 'Devam Et',
                not_guardian: 'Bu Adres Güvenilir Kişiniz Değil',
            },
            social_recovery_execute: {
                title: 'Kurtarmayı Tamamlayın',
                subtext:
                    'Güvenilir kişinize kurtarma talep bağlantısını verin, böylece hesap kurtarma işlemini başlatabilirler.',
                share: {
                    title: 'Kurtarma',
                    button: 'Paylaş',
                },
                back: 'Giriş Sayfasına Dön',
            },
            social_recovery_start: {
                title: 'Talebi Güvenilir Kişiyle Paylaş',
                subtext:
                    'Güvenilir kişi talebinizi onayladığında, 48 saatlik bekleme süresi sonunda kurtarma işlemini tamamlayabilirsiniz.',
                share: {
                    title: 'Kurtarma',
                    button: 'Paylaş',
                },
                back: 'Giriş Sayfasına Dön',
            },
            guardian_input: {
                label: 'Clave Kullanıcı Adı / ENS / 0x Adresi',
                invalid: {
                    ens_address: 'Geçersiz ENS adı',
                    address: 'Geçersiz adres',
                    username: 'Geçersiz kullanıcı adı',
                    guardian: 'Bu adres güvenilir kişi değil',
                },
                resolved: 'Adres: {{address}}',
            },
        },
        landing: {
            __description: 'Uygulamanın ilk sayfası',
            log_in: {
                button: 'Yeni Hesap Oluştur',
                recover: 'Hesabınızı Kurtarın',
                login: 'Giriş Yap',
            },
            intro: {
                title: 'Clave’ye Hoş Geldiniz',
                description: 'Web3’e tek tıklamayla giriş',
            },
            middle: {
                title: 'En Akıllı ve En Güvenli Hesaplar',
                description:
                    'Varlıklarınız donanım düzeyinde güvenlikle korunur.',
            },
            last: {
                option1:
                    'Kullanıcı adları ve bağlantılarla anında para gönderin ve alın',
                option2: 'Herhangi bir token ile ağ ücreti ödeyin',
                option3:
                    'Kurtarma için arkadaşlarınızı güvenilir kişi olarak ekleyin',
                option4: 'ZKsync tarafından desteklenmektedir',
            },
        },
    },
    receive: {
        available: '{{amount}} {{symbol}} Mevcut',
        set_amount: 'Talep Et',
        title: 'Talep Et',
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
            sending_to: 'Gönderiliyor',
            could_not_estimate: 'Miktar Tahmin Edilemedi',
            send: 'Gönder',
            title: 'Miktar Belirle',
            title_link: 'Bağlantı ile Gönderiliyor',
            sending_with_link: 'Bağlantı ile Gönderiliyor',
            create_payment_link: 'Ödeme Bağlantısı Oluştur',
            set_amount: 'Miktar Belirle',
            add_note: 'Not Ekle',
            available: '{{amount}} {{symbol}} Mevcut',
        },
        link_created: {
            title: 'Ödeme Bağlantısı Hazır',
            description:
                'Bağlantı alıcısı, parayı Clave hesabıyla talep edebilir.',
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
            title: 'Parayı Al',
            subtext: '{{amount}} Al',
            claim_button: 'Al',
            home: 'Ana Sayfa',
            claiming_funds: 'Alınyor',
            already_claimed: 'Zaten Alındı',
            error: {
                claim: 'Para alınamadı',
                fetch: 'Bağlantı detayları alınamadı',
            },
            notification: 'İşlem başarıyla gönderildi.',
        },
        link_claimed: {
            title: 'Para Alındı',
            subtext: '{{amount}} başarıyla alındı',
            home: 'Ana Sayfa',
        },
        created_links: {
            create_new_link: 'Yeni Bağlantı Oluştur',
            list_header: 'Sizin Tarafınızdan Oluşturulan Bağlantılar',
            title: 'Ödeme Bağlantıları',
            no_links: 'Alınmamış bağlantınız yok',
            no_link_button: 'Ana Sayfa',
            manage: 'Ödeme bağlantılarınızı yönetin: Tokenlere erişmek için paylaşın veya iptal edin.',
            tap: 'Daha fazla bilgi öğrenmek için dokunun.',
        },
        enter_address: {
            title: 'Alıcıyı Girin',
            error_invalid_address: 'Lütfen geçerli bir adres girin',
            error_invalid_username: 'Lütfen geçerli bir kullanıcı adı girin',
            resolved: '{{address}} adresine çözüldü',
            label: 'Clave Kullanıcı Adı / ENS / Adres',
            continue: 'Devam Et',
            contacts: 'Kişiler',
            address_book: 'Arkadaşlar',
            clave_users: 'Clave Kullanıcıları',
            clear: 'Temizle',
            clear_history: 'Geçmişi Temizle',
            clear_history_message: 'Emin misiniz?',
            cancel: 'İptal',
            no_results:
                'Sonuç bulunamadı. Alıcı adresini bilmiyorsanız, bağlantı ile herhangi birine para gönderebilirsiniz',
            search_results: 'Arama Sonuçları',
            recently_sended: 'Son Gönderilenler',
            send_with_link: 'Bağlantı ile Gönder',
            allow_contacts: 'Kişilere İzin Ver',
            Recents: 'Son',
            All: 'Hepsi',
            Friends: 'Arkadaşlar',
            Contacts: 'Kişiler',
            invite: 'Davet et',
            add_friend: 'Arkadaş Ekle',
        },
        qr_scan: {
            invalid_qr: 'Geçersiz QR kod',
        },
        send_with_link_bottomsheet: {
            title: 'Bağlantı ile Gönderiliyor',
            description:
                'Oluşturacağınız, içinde para bulunan bağlantılar ile linke sahip kişilerin parayı almasını sağlayabilirsiniz. Oluşturduğunuz ödeme bağlantılarını ana sayfadan kontrol veya iptal edebilirsiniz.',
            button: 'Anladım, devam et',
            never_show: 'Bir daha gösterme',
        },
    },
    dashboard: {
        address: 'Adresi görmek için dokunun',
        card: {
            title: 'Hesap Bakiyesi',
            activate: 'Hesabı Aktifleştir',
        },
        actions: {
            request: 'Talep Et',
            send: 'Gönder',
            swap: 'Takas',
            addMoney: 'Para Ekle',
        },
        recovery_alert_item: {
            social: 'Hesabınız için kurtarma işlemi başlatıldı. Eğer işlem, 48 saat içinde iptal edilmezse, hesabınıza bu cihazdan erişimi kaybedeceksiniz. İptal etmek için buraya dokunun.',
        },
        token_amount: {
            available: 'Bakiye',
        },
        estimated_quantity: 'Tahmini Miktar:',
        portfolio: {
            my_tokens: 'Tokenler',
            my_positions: 'Yatırımlar',
            earning: 'APR: {{apr}}%',
        },
        overlay: {
            add_custom_token: 'Özel Token Ekle',
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
                    first_banner: 'Clave ile Ayrıcalıklar',
                    second_banner: 'Davet Et ve Kazan',
                },
            },
            invite: {
                total_earned: 'Toplam Kazanç',
                total_referees: 'Toplam Davet Edilen',
                invite_earn: 'Davet Et ve Kazan',
                ref_code: 'Davet Kodunuz',
                what_you_get: 'Davetlilerinizden kazandıklarınız',
                what_they_get: 'Davetlilerinizin kazandıkları',
                first_benefit: '*{{amount}} ödenen ücretlerden geri kazanım',
                second_benefit:
                    'Yatırımda değerlendirdikleri ilk *{{amount2}} karşılığında *{{amount1}} ödül',
                third_benefit: '*{{amount}} ödenen ücretlerden geri kazanım',
                best_way_refer: 'En iyi davet yöntemi',
                send_them_dollar:
                    'Davet kodunuzu içeren bir ödeme bağlantısı gönderin',
            },
            saved_with_clave: {
                title: 'Clave kullanıcısı olduğunuz için teşekkürler{{name}}',
                tx_title: 'İşlemler',
                tx_text: 'Clave, {{txCount}} defa işlem ücretinizi ödedi.',
                earn_title: 'Yatırım',
                earn_text: 'Toplam getiri kazancınız.',
                earn_cta: 'Yatırıma Başla',
                button: 'X’de Paylaş',
            },
            card: {
                address: 'Adres',
                address_copied: 'Adres Kopyalandı',
                set_username: 'Kullanıcı Adı Belirle',
                no_username: 'Kullanıcı adı yok',
                copy_address: 'Adresi Kopyala',
                username_copied: 'Kullanıcı adı kopyalandı',
            },
            rewards: {
                title: 'Rozetler ve Ödüller',
                subtext: '',
            },
            social_recovery: {
                title: 'Hesap Güvenliği',
                subtext: '',
            },
            backup: {
                title: 'Hesap Yedekleme',
                subtext: 'Güvenilir Kişileri düzenleyin',
            },
            connected_dapps: {
                title: 'Bağlı Uygulamalar',
                subtext: 'WalletConnect oturumlarını yönetin',
            },
            settings: {
                title: 'Ayarlar',
                subtext: 'Uygulama özelleştirmelerine erişin',
            },
            photo_edit: {
                gallery: 'Galeriden seç',
                picture: 'Fotoğraf çek',
            },
            logout: 'Çıkış Yap',
            logout_subtext: 'Hesabınızdan çıkış yapın',
            logout_sure: 'Emin misiniz?',
            cancel: 'İptal',
        },
        group: {
            __description: 'Ayarlar grup başlıkları',
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
                    'Hesabınızı silmek istediğinizden emin misiniz? Hesabınıza artık erişemeyeceksiniz.',
                cancel: 'İptal',
                delete: 'Sil',
                delete_error: 'Hesabınız silinemedi',
            },
        },
        notifications: {
            title: 'Bildirimler',
            subtext: 'Bildirim tercihlerinizi yönetin',
        },
        preferences: {
            title: 'Tercihler',
            subtext: 'Para birimi ayarları',
            language: 'Dil',
            and_more: 've daha fazlası',
            update_fail:
                'Bildirim tercihleri güncellenemedi, lütfen tekrar deneyin',
            notification: 'Bildirimler',
            allow_notifications_title: 'Bildirimlere İzin Ver',
            allow_notifications_subtext: '',
            notify_guardians_title: 'Güvenilir Kişileri Bildir',
            notify_guardians_subtext: '',
            show_balance: 'Bakiye Görünürlüğü',
            show_balance_subtext: 'Ana ekranınızdaki bakiyeleri gizleyin',
            theme: 'Tema',
            theme_options: 'Tema ve simgeyi özelleştir',
            theme_dark: 'Koyu',
            theme_light: 'Açık',
            theme_system: 'Sistem',
            appearance: 'Görünüm',
            icon: 'Simge',
            advanced: 'Gelişmiş',
            advanced_subtext: 'Clave için daha gelişmiş ayarlar',
        },
        share: {
            title: 'Clave’i Paylaş',
            subtext: 'Clave’i arkadaşlarınızla paylaşın',
        },
        feedback: {
            title: 'Geri Bildirim Verin',
            subtext: 'Geri bildirimleriniz bizim için önemli',
        },
        twitter: {
            title: 'Bizi Takip Edin',
            subtext: 'X üzerinden bizi takip edin',
        },
        about: {
            title: 'Clave Hakkında',
            subtext: 'Şartlar, gizlilik ve kanallar',
            policy: {
                title: 'Politikalar',
            },
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
            twitter: 'Bizi X’de Takip Edin',
            twitter_subtext: '',
            discord: 'Discord’a Katılın',
            discord_subtext: '',
            telegram: 'Telegram’a Katılın',
            telegram_subtext: '',
        },
    },
    swap: {
        fetch_error: 'Teklif alınamadı',
        impact: 'Fiyat etkisi {{impact}}%',
        insufficient: 'Yetersiz Bakiye',
        status: {
            title: 'Takas Tamamlandı',
            subtext: 'Takas işlemi başarıyla tamamlandı',
            home: 'Ana Sayfa',
            add_token_error: 'Token, listenize eklenemedi',
        },
        fee: {
            bottom_sheet: {
                title: 'Takas Ücretleri',
                subtext: 'Bu takas teklifine %0.5 ücret dahil edilmiştir.',
                understand: 'Anladım',
            },
        },
        swap_box: {
            insufficient: 'Yetersiz Bakiye',
            max: 'Maks',
            balance: 'Bakiye: ',
            select_token: 'Token seçin',
        },
        quote_info: {
            quote: 'Teklifin yenilenmesine kalan',
            seconds: 'saniye',
        },
        review: {
            title: {
                main: 'Takas',
                input: 'Sat',
                output: 'Al',
            },
            continue: 'Takası Gözden Geçir',
        },
        settings: {
            bottom_sheet: {
                title: 'Maksimum Slipaj',
                subtext:
                    'Slipaj, likidite değişimlerinden etkilenerek beklenen ve gerçekleşen işlem fiyatları arasında oluşan farkını ifade eder. İşlemlerinizi optimal şekilde yürütmek için slipaj toleransını dikkatlice ayarlayın.',
                save: 'Kaydet',
            },
        },
        token_select: {
            title: {
                input: 'Satılan',
                output: 'Alınan',
            },
            label: 'Ara',
        },
    },
    walletconnect: {
        connected_dapps: {
            title: 'Bağlı Uygulamalar',
            subtext:
                'Bağlı olduğunuz merkeziyetsiz uygulamalar aşağıda gösterilmektedir.',
            disconnect: 'Bağlantıyı Kes',
            explore: 'Uygulamaları Keşfet',
        },
        empty_state: {
            title: 'Bağlı Uygulama Yok',
            subtext: '',
        },
        title: '{{name}} bağlanmak istiyor',
        invalid_chain: 'Geçersiz ağ',
        connect: 'Bağlan',
        connected: 'Başarıyla bağlandı',
        application: 'Uygulama',
        send_requests: 'Onay talepleri gönder',
        see_activity: 'Bakiye ve etkinlikleri görüntüle',
        send_transaction: 'Adınıza işlem gönder',
        signature_request: 'İmza Talebi',
        accept: 'Bağlanmak için kaydırın',
        reject: 'Reddet',
        no_camera_title: 'Kamera İzni Yok',
        no_camera_subtitle: 'QR kodu taramak için lütfen kameraya izin verin',
        no_camera_button: 'Ayarları aç',
        swipe: 'Devam Etmek için kaydırın',
        release: 'Bırakın',
        proceed: 'Devam Etmek için kaydırın',
        invalid_qr_code: 'Geçersiz QR Kodu',
        mismatch: 'Alan adı uyuşmazlığı',
        mismatch_subtext:
            'Web sitesinin alan adı, isteği gönderenle eşleşmiyor. Onaylamak, fon kaybına yol açabilir.',
        not_verified: 'Doğrulanamadı',
        not_verified_subtext:
            'Bu alan adı doğrulanamıyor. Onaylamadan önce isteği dikkatlice kontrol edin',
        network: 'Ağ',
        Account: 'Hesap',
    },
    history: {
        main: {
            title: 'İşlem Geçmişi',
            no_transactions: 'Herhangi bir işlem bulunamadı',
            load_more_transactions: 'Daha Fazla İşlem Yükle',
            see_all: 'Hepsini Gör',
            preparing_transactions: 'İşlem Geçmişiniz Hazırlanıyor',
        },
        transaction: {
            from: '{{user}}',
            to: '{{user}}',
            reward: 'Ödül',
            self: 'Ben',
            failed: 'Başarısız',
            transfer: 'Transfer',
            guardian_added: 'Güvenilir Kişi eklendi',
            contract_interaction: 'Uygulama etkileşimi',
            guardian_removed: 'Güvenilir Kişi kaldırıldı',
            transfer_link_created: 'Ödeme bağlantısı oluşturuldu',
            transfer_link_claimed: 'Bağlantıdan alındı',
            claimed_by_user: '{{user}} tarafından alındı',
            created_by_user: '{{user}} tarafından oluşturuldu',
            swap: 'Takas',
            fail: 'Başarısız',
            earnDeposit: 'Yatır',
            earnWithdraw: 'Çek',
            earnClaim: 'Topla',
            earnWithdrawRequest: 'Çekim Talebi',
            delegated_zk_tokens: 'Clave’e delege edildi',
            deposit: 'Yatır',
            cashback: 'Geri ödeme',
            referral: 'Davet Komisyonu',
            earnMigrate: 'Fonları Taşı',
            onramp: 'Banka Transferi',
            details: {
                title: 'İşlem Detayları',
                payment_link: 'Ödeme Bağlantısı',
                me: 'ben',
                tx_type: 'Tür',
                token_sent: 'Gönderilen Token',
                token_received: 'Alınan Token',
                recipient: 'Alıcı',
                sender: 'Gönderen',
                token_type: 'Token Türü',
                transaction_success: 'İşlem Başarılı',
                transaction_fail: 'İşlem Başarısız',
                guardian_name: 'Güvenilir Kişi Adı',
                sent_to_or_from: '{{sentOrReceived}} {{type}} {{user}}',
                add_token: 'Token Ekle',
                token_swapped: 'Tokenler takas edildi',
                reclaim_funds: 'Tokenleri Geri Al',
                reclaim_in_time: '{{time}} içinde geri al',
                gas_fee: 'Ağ Ücreti',
                note: 'Not',
                onramp_title: '{{amount}} Tutarında Banka Transferi',
                earn_details: {
                    withdraw_title: '{{amount}} Çek',
                    deposit_title: '{{amount}} Yatır',
                    earn_subtitle:
                        '{{protocol}} protokolü üzerinde {{tokenSymbol}}',
                    claim_title: '{{amount}} Al',
                    migrate_title: 'Fonları Taşı',
                    withdraw_request_title: '{{amount}} için Çekim Talebi',
                },
                delegated_to_clave: 'ZK, Clave’e devredildi',
                delegation: 'Delege',
                deposit_details: {
                    title: '{{amount}} Yatırıldı',
                },
                referral: 'Yönlendirme',
            },
            pending: {
                timeout: 'Bir şeyler ters gitti',
                pending: 'Bekliyor',
                sending_funds: 'Fonlar gönderiliyor',
                claiming_funds: 'Fonlar alınıyor',
                swapping_tokens: 'Tokenler takas ediliyor',
                sending_transaction: 'İşlem gönderiliyor',
                onramping: 'İşlem devam ediyor',
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
        search: 'Arama Sonuçları',
        empty_state_favorites:
            'Sık kullanılanlara eklediğiniz sitelere hızlıca erişebilirsiniz.',
        favorites: 'Sık Kullanılanlar',
        search_placeholder: 'Ara',
        search_results: {
            google: "Google'da Ara",
            browser: "{{name}}'a Git",
        },
    },
    recover: {
        __description:
            'Bir güvenilir kişi, bağlantıyı aldıktan sonra takip edilen kurtarma süreci',
        title: 'Kurtarma Talebi',
        subtext: 'Kurtarmak istiyor musunuz?',
        function_name: 'Kurtar',
        accept: 'Kabul Et',
        decline: 'Reddet',
        cancel: {
            home: 'Ana Sayfa',
            action: 'Kurtarmayı İptal Et',
            title: 'Kurtarma işlemini iptal ettiniz!',
            subtext:
                'Eğer güvenilir kişinin tekrar kurtarma işlemi başlatmasını istemiyorsanız, onları Yedekleme sayfasından kaldırabilirsiniz.',
        },
        execute: {
            title: 'Kurtarmayı Tamamla',
            subtext:
                '48 saatlik bekleme süresi doldu ve kurtarma işlemini tamamlayabilirsiniz.',
            function_name: 'Kurtarmayı Gerçekleştir',
            approve: 'Kurtarmayı Tamamla',
            decline: 'Reddet',
        },
        reject: {
            title: 'Kurtarma Talebini Reddettiniz!',
            subtext: 'Kurtarma başlatılmayacak.',
            home: 'Ana Sayfa',
        },
        start: {
            user_title: 'Kurtarma başarıyla başlatıldı',
            someone_title: 'Kurtarma zaten başlatıldı',
            user_subtitle:
                'Kurtarma işlemi 48 saatlik bekleme süresinden sonra tamamlanmaya hazır olacak.',
            home: 'Ana Sayfa',
        },
        sign_bottom_sheet: {
            title: 'İmza Talebi',
            description:
                'Bu mesajı imzalamak, bu hesabı güvenilir kişi olarak kurtarmayı kabul ettiğiniz anlamına gelir. Bu hesap, 48 saatlik bekleme süresi sonunda kurtarma için hazır olacak. Bundan sonra, size gönderilen aynı bağlantı üzerinden kurtarmayı tamamlayabileceksiniz.',
            release: 'Kabul Ediyorum',
            sign: 'İmzala',
        },
        success: {
            user_title: 'Kurtarma Başarıyla Başlatılan Kullanıcı',
            someone_title: 'Kurtarma Önceden Başlatılan Kullanıcı',
            user_subtitle:
                'Kurtarma işlemini başlattınız. Hesap, 48 saat içinde kurtarılacak ve hesap sahibi kurtarma işlemi konusunda bilgilendirilecek.',
            someone_subtitle:
                'Bu hesap için kurtarma işlemi zaten başlatıldı. Hesap 48 saat içinde kurtarılacak ve hesap sahibi kurtarma işlemi konusunda bilgilendirilecek.',
        },
    },
    set_username: {
        __description:
            'Profil veya kurulum aşamasında kullanıcı adı belirleme sayfası',
        title: 'Kullanıcı Adı Belirle',
        subtext: 'Clave’de ihtiyacınız olan tek şey kullanıcı adınızdır.',
        placeholder: 'Kullanıcı Adı Yazın',
        label: 'Kullanıcı Adı',
        continue: 'Kullanıcı Adı Belirle',
        later: 'Bana sonra hatırlat',
    },
    token_selection: {
        __description:
            'Gönderme ve talep etme işlemlerinde token seçme sayfası',
        send: 'Token seçin',
        request: 'Token seçin',
    },
    complete_account: {
        title: 'Hesabınızı Tamamlayın',
        subtitle:
            'Arkadaşlarınızı davet etmek için aşağıdaki adımları tamamlamanız gerekiyor.',
        back: 'Geri Dön',
        select_username: 'Kullanıcı adınızı seçin',
        profile_pic: 'Profil fotoğrafınızı ekleyin',
        guardian: 'Güvenilir kişilerinizi ekleyin',
    },
    transaction: {
        __description: 'İşlem gönderildiğinde izlenen sürece ilişkin çeviriler',
        context: {
            generic: {
                contract_interaction: 'Uygulama Etkileşimi',
                value: 'Değer',
            },
            free: 'Ücretsiz',
            transfer: {
                sending_to: "*{{name}}'a Gönderiliyor",
                creating_link: 'Bağlantı Oluşturuluyor',
                estimated: 'Tahmini Değer',
                first_time: 'İlk Defa Ödeme Yapılan Adres',
                note: 'Not',
                first_time_sending: 'Bu adrese ilk defa ödeme yapılıyor.',
            },
            add_guardian: {
                title: 'Güvenilir Kişi Ekleniyor',
                title_multiple: 'Güvenilir Kişiler Ekleniyor',
                description:
                    'Güvenilir kişiler, hesabınıza erişiminizi kaybederseniz hesabınızı kurtarmanıza yardımcı olabilirler.',
            },
            remove_guardian: {
                title: 'Güvenilir Kişiler Kaldırılıyor',
                description:
                    'Kaldırılan güvenilir kişiler, artık hesabınızda kurtarma işlemi yapamayacaklar.',
            },
            swap: {
                title: 'Takas',
                fee: 'Takas Ücreti',
                rate: 'Oran',
            },
            earn_collect: {
                title: 'Ödüller Toplanıyor',
            },
            earn_withdraw: {
                title: 'Tokenler Çekiliyor',
                earnings: 'Getiriler',
                protocol_fee: 'Protokol Ücreti',
            },
            earn_deposit: {
                title: 'Tokenler Yatırılıyor',
                apr: 'APR',
                protocol_fee: 'Protokol Ücreti',
                estimated_earnings: 'Tahmini Haftalık Getiriler',
            },
            network_fee: 'Ağ Ücreti',
            swipe: 'Kaydırın',
            simulating: 'Güvenlik detayları kontrol ediliyor...',
            simulated_success: 'İşlem doğrulandı',
            simulated_failed: 'İşlem doğrulanamadı',
            simulated_malicious: 'İşlem kötü amaçlı olarak işaretlendi',
            received: 'Alınan Tokenlar',
            sent: 'Gönderilen Tokenlar',
            approve: 'Harcama İzni',
            max: 'Sonsuz',
        },
        approve: {
            title: 'Özet',
            back: 'Geri',
            type: 'Tür',
            sender: 'Gönderen',
            recipient: 'Alıcı',
            gas_token: 'Ücret ödendi',
            approve: 'Harcama izni ver',
            contract_interaction: 'Uygulama Etkileşimi',
            paid_by: 'Ağ Ücretini Ödeyen:',
            paid_with: 'Ağ Ücreti Ödendi:',
            estimated_gas_fee: 'Ağ Ücreti',
            amount: 'Miktar',
            contract_address: 'Sözleşme Adresi',
            swipe: 'Onaylamak için Kaydırın',
            insufficient_balance: 'Yetersiz bakiye',
            free: 'Ücretsiz',
            approve_token: 'Harcama İznini Onayla',
            delegate: 'Devret',
        },
        fee: {
            title: 'İşlem Ücreti',
            proceed: 'Devam Et',
            total_gas_fee: 'Toplam Ağ Ücreti',
            free: 'Ücretsiz',
            pay_option: 'Ödeme Yöntemi:',
        },
        status: {
            success: 'İşlem Başarılı',
            failed: 'İşlem Başarısız',
            home: 'Ana Sayfa',
            details: 'İşlem Detayları',
            link: {
                first: 'İşlem detaylarını',
                second: 'blok gezgininde',
                third: 'görüntüle.',
            },
            link_left: 'İşlem detaylarını görmek için',
            link_right: 'tarayıcıda aç.',
            tx_link: 'İşlem bağlantısı',
            time: 'Zaman',
            token_amount: 'Token Miktarı',
            gas_fee: 'Ağ Ücreti',
        },
        estimating_gas_fee: 'Ağ Ücreti Hesaplanıyor',
        reject: 'Reddet',
        release: 'Bırakın',
        estimate_gas_failed: 'İşlemin başarısız olacağı tahmin ediliyor.',
        notification: 'İşlem başarıyla gönderildi.',
    },
    navbar: {
        home: 'Ana Sayfa',
        hub: 'Merkez',
        profile: 'Profil',
    },
    custom_token: {
        __description:
            'Portföyde Token Ekle butonuna basıldığında açılan alt sayfa',
        token_address: 'Adres',
        token_name: 'İsim',
        add: 'Özel Token Ekle',
        invalid_address: 'Geçersiz adres',
        error: 'Token eklenemedi',
        max_custom_token: 'En fazla 30 adet özel token ekleyebilirsiniz',
        token_already_exists: 'Token zaten mevcut',
        search: 'Token ara',
        add_manually: 'Elle Ekle',
        owned_tokens: 'Sahip olunan tokenler',
        other_tokens: 'Diğer tokenlar',
    },
    portfolio: {
        __description: 'Portföy sayfası ve token detayları',
        available: 'Mevcut Bakiye',
        about_token: '{{token}} Hakkında',
        no_chart_data: 'Grafik verisi yok',
        market_cap: 'Piyasa Değeri',
        volume: 'Toplam Hacim',
        my_tokens: 'Tokenlar',
        my_positions: 'Pozisyonlar',
        header: 'Portföyüm',
        add_custom_token: 'Özel Token Ekle',
        day: '1G',
        week: '1H',
        month: '1A',
        year: '1Y',
        actions: {
            send: 'Gönder',
            request: 'Talep Et',
            swap: 'Takas',
            delegated: 'Delege Edildi',
            delegate: 'Delege Et',
            buy: 'Satın Al',
            notify: {
                delegated: 'Başarıyla Clave’e delege edildi',
            },
            earn: '{{symbol}} ile %{{apr}} APR kazanabilirsiniz',
        },
        links: {
            website: 'Web sitesi',
            explorer: 'Blok gezgini',
            coingeco: 'Coingecko',
        },
    },
    empty_state: {
        no_results: 'Sonuç bulunamadı',
    },
    sign: {
        title: 'İmza Talebi',
        release: 'Bırakın',
        reject: 'Reddet',
    },
    split: {
        create_group: {
            create_new: 'Yeni Grup Oluştur',
            group_name: 'Grup adı',
            enter_group_name: 'Grup adını girin',
            create: 'Oluştur',
            create_error: 'Grup oluşturulamadı',
        },
        groups: {
            title: 'Harcama Bölüştür',
            subtext:
                'Arkadaşlarınızla çeşitli ödemelerinizi bölüştürmek için bir grup oluşturabilirsiniz.',
            no_groups: 'Herhangi bir grubunuz yok',
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
                label: 'Ad',
                members: 'Üyeler',
                leave: {
                    title: 'Gruptan Ayrıl',
                    subtext: '',
                    disabled: {
                        subtext: {
                            owe: 'Öncelikle borçlarınızı ödemeniz gerekiyor',
                            owed: 'Öncelikle alacaklarınızı toplamanız gerekiyor',
                        },
                    },
                },
                delete: {
                    title: 'Grubu Sil',
                    subtext: 'Grubu silme işlemi geri alınamaz.',
                },
            },
            delete: {
                alert: {
                    error: 'Grup silinemedi',
                },
                title: 'Grubu Sil',
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
                        owe: 'Öncelikle borçlarınızı ödemeniz gerekiyor',
                        owed: 'Öncelikle alacaklarınızı toplamanız gerekiyor',
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
                invite: 'Arkadaşlarını Davet Et',
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
                subtext: 'Ödeme bilgilerini girebilirsiniz.',
                too_long: 'İsim çok uzun, lütfen daha kısa bir isim kullanın.',
                too_small: 'Minimum miktar $0.10',
                label: {
                    name: 'Ad',
                    amount: 'Miktar',
                },
                continue: 'Devam Et',
                summary: {
                    paid: 'Ödendi',
                    members: 'Grup üyeleri',
                    complete: 'Tamamla',
                    more: 've {{count}} kişi daha',
                    title: 'Ödeme Özeti',
                    payer: 'Ödeyen',
                    equally: 'Eşit olarak bölüştürülüyor',
                    per: 'kişi başı',
                },
            },
            option: {
                title: 'Ödeme Yöntemi?',
                crypto: 'Kripto ile Öde',
                cash: 'Nakit ile Ödendi',
                alert: {
                    cash: {
                        title: 'Nakit ile Ödendi',
                        sure: 'Seçilen borçlar ödenmiş olarak işaretlenecek',
                        cancel: 'İptal',
                        pay: 'Onayla',
                    },
                },
            },
        },
        spending: {
            detail: {
                payer: 'Ödeyen',
                spenders: 'Eşit Olarak Bölüştürüldü',
            },
        },
        review: {
            debts: {
                title: 'Borçları Öde',
                subtext: 'Ödemek istediğiniz borçları seçebilirsiniz.',
                select: 'Tümünü Seç',
                deselect: 'Seçimi Kaldır',
                debt_to: 'Borç:',
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
                    creditor: 'Alacaklısınız',
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
                title: 'Eşit Olarak Bölüştürüldü',
                members: 'Grup Üyeleri',
                select: 'Tümünü Seç',
                deselect: 'Seçimi Kaldır',
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
        __description: 'QR Kod okuyucu sayfası',
        connect: 'Bir Uygulamaya Bağlan',
        send: 'Bir Adrese Gönder',
        aim: 'QR Kodu Oku',
        you_can_scan: 'Tarayarak şunları yapabilirsiniz',
    },
    share_bottom_sheet: {
        __description:
            'Dashboard’da adres butonuna tıklandığında ya da ZKsync ile para yatırma seçildiğinde açılan alt sayfa',
        title: 'ZKsync Era Hesabınız',
        share: {
            subtext:
                'Bu adresi para yatırmak veya talep etmek için kullanın. Bu adrese Ethereum veya diğer ağlardan para göndermeyin.',
            qrCode: 'Para yatırmak veya talep etmek için bu QR kodunu gösterin.',
            done: 'Tamam',
        },
    },
    deposit: {
        __description: 'Para yatırma sayfasına ilişkin çeviriler',
        network: {
            __description:
                'Ağların listelendiği para yatırma seçenekleri sayfası',
            option: {
                no_fee: 'Ücret Yok',
                fee: 'Ücret: ${{fee}}',
                bridge_speed: 'Hız: {{time}} dk',
                recommended: 'Önerilen',
            },
            warning: {
                continue: 'Anladım, devam et',
                info: 'Fon transferi yapmak için, başka bir cüzdandan veya borsadan {{network}} ağında kopyalanmış adrese göndermeniz gerekir.',
                amount: {
                    min: 'Minimum miktar',
                    max: 'Maksimum miktar',
                },
            },
        },
        option: {
            __description:
                'Başlangıç para yatırma sayfasındaki kutucukların alt başlığı, kullanıcı ZKsync veya diğer ağları seçerken',
            wallets: 'Cüzdanlar',
            exchanges: 'Borsalar',
        },
        status: {
            title: 'Para Yatırma Durumu',
            no_deposits: 'Para yatırma işlemleriniz burada erişilebilir olacak',
            add: 'Yeni Para Yatırma İşlemi',
            back: 'İşlemimle ilgili yardıma ihtiyacım var',
            item: {
                title: '{{network}} ağında {{symbol}}',
                completed: 'Tamamlandı',
                pending: {
                    layerswap: 'Köprü transferi bekleniyor',
                    user: 'Kullanıcı transferi bekleniyor',
                    popup: 'Beklemede',
                },
                deposit_address: 'Para yatırma adresi',
                learn: 'Daha fazla bilgi için tıklayın',
                remove: {
                    title: 'Para Yatırma Talebini Sil',
                    subtext:
                        'Para yatırma talebini silerseniz, belirtilen adrese fon göndermemelisiniz. Her zaman yeni para yatırma işlemleri başlatabilirsiniz.',
                    continue: 'Para Yatırmaya Devam Et',
                    delete: 'Evet, sil',
                },
            },
        },
        support: {
            title: 'Destek Alın',
            subtext:
                'Para yatırma işleminizle ilgili sorun yaşıyorsanız, Layerswap Destek ile iletişime geçebilirsiniz.',
            back: 'Destek Al',
            time: {
                title: 'Para Yatırma Süreleri',
                text: 'Diğer ağlardan para yatırma işlemi, token ve ağ türüne bağlı olarak 2 ila 30 dakika arası sürebilir.',
            },
            support: {
                title: 'Teknik Destek',
                text: 'Para yatırma işlevi Layerswap altyapısı ile sağlanır, bu nedenle destek sağlama konusunda en iyi ekip onlardır.',
            },
        },
        start: {
            __description:
                'Earn sayfasında bakiye 0 olduğunda açılan alt sayfa',
            zksync: 'ZKsync Era ağında kripto paranız varsa, doğrudan Clave hesabınıza gönderebilirsiniz.',
            networks: {
                title: 'Diğer Ağlar',
                text: 'Diğer ağlardaki kripto paralarınızı Clave’e Para Yatırma işleviyle aktarabilirsiniz.',
            },
            cex: {
                title: 'Merkezi Borsalar',
                text: 'Borsalardaki kripto paralarınızı da Clave’e aktarabilirsiniz.',
            },
            title: 'Yatırımlarınıza Başlamak için Para Yatırın',
            subtext: 'Hesabınızı aşağıdaki yöntemlerle fonlayabilirsiniz',
            deposit: 'Para Yatır',
        },
        token: {
            __description: 'Token seçimi sayfası',
            bottom_sheet: {
                title: 'Token Yatırma',
            },
        },
        choose: {
            token: {
                title: 'Token Seç',
            },
            network: {
                title: 'Ağ Seç',
                no_deposits:
                    'Para yatırma işlemleriniz burada erişilebilir olacak',
            },
        },
        new: {
            title: 'Kripto Para Yatır',
            options: {
                wallets: {
                    title: 'Bir cüzdandan kripto para yatırın',
                    subtext: 'Diğer ağlardan kripto para yatırın',
                    subtitle: 'Cüzdanlar',
                },
                exchanges: {
                    title: 'Bir borsadan kripto para yatırın',
                    subtext: 'Diğer ağlardan kripto para yatırın',
                    subtitle: 'Borsalar',
                },
                zksync: {
                    title: 'ZKsync Era ağında para yatırın',
                    subtext: 'Direkt Clave adresinize transfer yapın',
                },
            },
            option: {
                wallets: 'Bir cüzdandan kripto para yatırın',
                exchanges: 'Bir borsadan kripto para yatırın',
            },
            pending: 'Bekleyen para yatırma işlemleri',
            initiate: 'Yeni Para Yatırma İşlemi Başlat',
        },
        summary: {
            title: 'Tokenleri Transfer Et',
            info: {
                first: '{{token}} tokenini tercih ettiğiniz bir borsanın {{network}} ağından transfer edin.',
                second: 'Bir borsadan nasıl transfer yapılacağını görmek için tıklayın.',
            },
            selected: 'Seçilen Token',
            deposit: {
                address: 'Para Yatırma Adresi',
            },
            amount: {
                min: 'Minimum miktar',
                max: 'Maksimum miktar',
            },
            receive: 'Alacağınız miktar',
            time: {
                name: 'Tahmini süre',
            },
            min: 'dak',
            continue: 'Para Yatırma İşlemi Durumunu Görüntüle',
            network: {
                token: '{{token}} {{network}} ağında',
            },
            fees: 'Ücretler',
            fee: {
                title: 'Token Transfer Ücretleri',
                subtext:
                    'Gösterilen ücretler, varlıkları güvenli bir şekilde ağlar arasında geçirmede gerekli olan masrafı yansıtır.',
                continue: 'Anladım',
            },
        },
        work: {
            __description:
                'Para yatırma sayfası ilk ziyaret edildiğinde açılan alt sayfa',
            title: 'Para Yatırma Nasıl Çalışır?',
            subtext: {
                info: {
                    first: 'Fon yatırmak için ya başka bir ZKsync hesabından transfer yapabilir ya da diğer ağlardan transfer için bir köprü kullanabilirsiniz.',
                    second: 'Lütfen adımları dikkatlice takip edin.',
                },
                warning: {
                    first: 'Clave hesabınız',
                    second: 'YALNIZCA',
                    third: 'ZKsync Era ağındadır',
                },
            },
            continue: 'Başlayın',
            zksync: {
                title: 'ZKsync Era',
                text: 'ZKsync Era ağında kripto paranız varsa, doğrudan Clave adresinize gönderebilirsiniz.',
            },
            other: {
                title: 'Diğer Ağlar',
                text: 'Diğer ağlardan kripto para transferi başlatabilirsiniz.',
            },
            cex: {
                title: 'Merkezi Borsalar',
                text: 'Desteklenen ağlar aracılığıyla merkezi borsalardan kripto para transferi başlatabilirsiniz.',
            },
        },
    },
    addMoney: {
        title: 'Para Ekle',
        subtext: 'Cüzdanınıza para eklemek için bir yöntem seçin.',
        onramp: {
            title: 'Banka Transferi',
            subtext: 'Banka transferleri ile USDC.e satın alın.',
            example: 'Ülkeler',
        },
        deposit: {
            title: 'Kripto Para Yatır',
            subtext: 'Cüzdanlardan veya borsalardan kripto para alın.',
            example: 'Ağlar',
        },
        wallet: {
            title: 'Başka Cüzdanlardan Yatır',
            subtext: 'Başka cüzdanlardan kripto para alın.',
        },
        request: {
            title: 'Arkadaşlarınızdan Talep Edin',
            subtext: 'Bir ödeme talep bağlantısı oluşturun.',
        },
        close: 'Kapat',
    },
    onramp: {
        bank: {
            title: 'Gönder',
            subtext:
                '*{{toAmount}} *{{toCurrency}} tutarı *{{rate}} oranı ile alacaksınız.',
            paid: '{{symbol}}{{amount}} tutarlı ödemeyi yaptım',
            copied: 'Panoya kopyalandı',
            back: 'Geri Dön',
            continue: 'Durumunu Kontrol Et',
            delete_error: 'İşlem iptal edilemedi, lütfen tekrar deneyin',
            cancel: 'İptal Et',
            notes: {
                individual_account:
                    'Yalnızca KYC sürecini tamamladığınız, adınıza kayıtlı kişisel banka hesabınızdan TRY gönderebilirsiniz.',
                bank_hours: '',
                name: 'İsim',
                accountNumber: 'Hesap Numarası',
                ifsc: 'IFSC',
                bank: 'Banka',
                iban: 'IBAN',
                'Bank Name': 'Banka Adı',
                country: 'Ülke',
                address: 'Adres',
                transferCode: 'Transfer Kodu',
                virtualAccount: 'Sanal Hesap',
            },
            information: {
                title: 'Transfer için Banka Hesabı',
                important: 'Önemli Bilgiler',
            },
        },
        exchange: {
            title: 'Banka Transferi',
            rate: 'Kur',
            fee: {
                processing: 'İşlem Ücreti',
                free: 'Ücretsiz',
                network: 'Ağ Ücreti',
                continue: 'Devam Et',
            },
            box: {
                pay: 'Yatır',
                get: 'Al',
                min: 'Min {{sign}} {{amount}}',
            },
            review: {
                title: 'Gözden Geçir',
            },
            phone: { title: 'Hesap:' },
            change: 'Değiştir',
            rate_dif: 'Bankalardan %{{percentage}} daha iyi.',
            max_limit: 'Maksimum limit {{limit}} {{currency}}',
            continue: 'Devam Et',
            back: 'Geri Dön',
            over_max_limit:
                "Aylık kalan işlem limitiniz {{limit}} {{currency}}'dir",
        },
        history: {
            title: 'Satın Alma Geçmişi',
            fail: 'Ödeme Başarısız',
            buying: 'Token satın alınıyor',
            success: 'Başarılı',
            finding: 'Ödeme Bekleniyor',
            paid: 'Ödendi: {{sign}}{{amount}}',
            rate: '{{sign}}{{rate}} / {{symbol}}',
            get: 'Alındı: {{amount}} {{symbol}}',
            no_transaction: 'Banka transferi işlemleriniz burada gösterilecek.',
        },
        kyc: {
            details: {
                name: {
                    title: 'Bilgileri tamamlayın',
                    subtext:
                        'Banka transferi işlemine başlamak için KYC bilgilerinizi tamamlayın',
                    name: 'Ad',
                    surname: 'Soyad',
                    choose: 'Cinsiyetinizi Seçin',
                    gender: 'Cinsiyet',
                    male: 'Erkek',
                    female: 'Kadın',
                    continue: 'Devam Et',
                },
                birthday: {
                    title: 'Bilgileri Tamamlayın',
                    subtext: 'İşleme başlamak için KYC bilgilerini doldurun',
                    birthday: 'Doğum Günü',
                    date_example: 'GG / AA / YYYY',
                    continue: 'Devam Et',
                },
                identity: {
                    title: 'Bilgileri Tamamlayın',
                    subtext:
                        'Banka transferi işlemine başlamak için KYC bilgilerini doldurun',
                    identity: 'Kimlik Numarası',
                    occupation: 'Meslek',
                    occupation_example: 'Mühendis, öğretmen',
                    address: 'Adres',
                    city: 'Şehir',
                    postal_code: 'Posta Kodu',
                    continue: 'Devam Et',
                    check: 'KYC bilgileri kontrol ediliyor...',
                    kyc_error:
                        'Lütfen KYC bilgilerinizi kontrol edin ve tekrar deneyin',
                    kyc_completed: 'KYC işleminiz başarıyla tamamlandı',
                },
            },
            validation: {
                invalid_identity_range:
                    'T.C. Kimlik Numarası 10000000000 ile {{max}} arasında olmalıdır.',
                invalid_phone_number:
                    'Lütfen geçerli bir telefon numarası girin',
            },
            document: {
                title: 'Kimlik Türünü Seçin',
                subtext:
                    'KYC işlemini tamamlamak için kullanacağınız belge türünü seçin',
                national_id: 'Ulusal Kimlik',
                passport: 'Pasaport',
                driving_license: 'Sürücü Belgesi',
            },
            files: {
                title: 'KYC Dosyalarını Gönder',
                subtext:
                    'KYC için belgenizin bir fotoğrafını istememiz gerekiyor. Şu anda bu belgelerin alındığını varsayıyoruz.',
                camera_permission: 'Kamera İzni',
                camera_permission_message:
                    'Fotoğraf çekmek için ayarlarınızdan kamera iznini etkinleştirin.',
                cancel: 'İptal et',
                open_settings: 'Ayarları Aç',
            },
            phone: {
                title: 'Telefon Numarası',
                subtext: 'İşlemi tamamlamak için telefon numaranızı girin.',
                phone: 'Telefon numarası',
                continue: 'Devam Et',
                phone_number_used:
                    'Telefon numarası zaten başka bir kullanıcı tarafından kullanılıyor',
                try_again: 'Tekrar deneyin',
                unexpected_error: 'Beklenmeyen bir hata oluştu.',
            },
            funds: {
                title: 'Gelirlerinizin Ana Kaynağı',
                subtext: 'Yatıracağınız paranın ana kaynağı nedir?',
                salary: 'Maaş',
                savings: 'Birikim',
                investments: 'Yatırımlar',
                inheritance: 'Miras',
                credit: 'Kredi',
                continue: 'Devam Et',
            },
        },
        transaction: {
            status: {
                title: 'İşlem Doğrulanıyor',
                subtext:
                    'Transfer tamamlandığında bildirim alacaksınız ve transfer durumunu her zaman geçmişten kontrol edebilirsiniz. Bu sayfada beklemenize gerek yoktur.',
                payment: {
                    title: 'Ödeme kabul ediliyor',
                    subtext: 'Bu işlem 2 dakikaya kadar sürebilir.',
                },
                purchase: {
                    title: 'USDC.e Satın Alınıyor',
                    subtext: 'İşleminizi doğruladık.',
                },
                transfer: {
                    title: 'USDC.e Transfer Ediliyor',
                    subtext: 'Tahmini bekleme süresi 2 dakikadır.',
                },
                bank: {
                    show: 'Banka Detaylarını Göster',
                },
                continue: 'Devam Et',
                home: 'Ana Sayfa',
            },
        },
        verification: {
            title: 'Doğrulama Beklemede',
            subtext:
                'Bu işlem 3-10 dakika arası sürebilir. Lütfen bekleyin veya daha sonra tekrar kontrol edin.',
            done: 'Tamam',
        },
        choose: {
            fiat: {
                title: 'Konum Seçin',
                label: 'Arama',
                countries: 'Ülkeler',
                no_option: 'Kur seçenekleriniz burada görüntülenecek',
                soon: 'Yakında',
            },
        },
        progress: {
            pending: 'Beklemede',
            processing: 'İşleniyor',
            completed: 'Tamamlandı',
        },
        camera: {
            selfie: 'Yüzünüzün bir fotoğrafını çekin',
            description: 'Belgenizin {{side}} tarafının fotoğrafını çekin',
            front: 'ön',
            back: 'arka',
            error: 'Fotoğraf yüklenemedi, lütfen tekrar deneyin',
        },
        support: {
            title: 'Destek',
            no_ticket: 'Destek talepleriniz burada görünecek',
            closed: 'Kapalı',
            error: 'Başarısız destek talebi',
            success: 'Başarılı',
            pending: 'Yanıt bekleniyor',
            date: 'Talep Id: {{id}} - {{date}}',
            header: {
                onramp: 'Banka Transferi Desteği',
            },
        },
        notify: {
            alert: {
                title: 'Para göndermeden önce',
                read: 'Tüm uyarıları okudum.',
                account:
                    'Kimlik doğrulama sürecini tamamladığım ismime kayıtlı banka hesabımdan transfer yapacağım.',
                continue: 'Devam Et',
            },
        },
    },
    invest: {
        __description: 'Kazanç sayfası ile ilgili çeviriler',
        completedv2: {
            __description:
                'Kazanç işlemlerinin sonuçlarını gösteren Kazanç sayfası',
            title: {
                invest: 'Yatırım Başarılı',
                withdraw: 'Çekim Başarılı',
                claim: 'Getiriler Toplandı',
                requestWithdraw: 'Çekim İsteği Gönderildi',
            },
            subtext: {
                withdraw:
                    'Tokenlerınız çekildi.\nKazanmaya devam etmek için her zaman yeniden yatırabilirsiniz.',
                invest: 'Harika! Tokenlerınız şu anda size %{{apr}}\nAPR kazandırıyor.',
                claim: 'Tebrikler! Getirileriniz toplandı\nve bakiyenize eklendi.',
                requestWithdraw:
                    'Talebiniz başarıyla gönderildi.\nFonlarınızı 10 gün sonra çekebileceksiniz.',
            },
            check: 'Getirilerinizi Kontrol Edin',
            earn: 'Yatırım',
            home: 'Ana Sayfa',
            deposited_amount: 'Yatırılan Tutar',
            withdraw_amount: 'Çekilen Tutar',
            weekly_earnings: 'Tahmini Haftalık Getiri',
            reward_amount: 'Ödül Miktarı',
            lockup_time: 'Çekim Tarihi',
            ten_days: '10 Gün',
        },
        options: {
            title: 'Yatırımlar',
            positions: 'Pozisyonlar',
            options: 'Mevcut Seçenekler',
            banner: {
                learn: 'Daha fazla bilgi için dokunun',
                info: '1000$ ile\n {{earn}}$ kadar kazanabilirsiniz',
            },
            category: {
                all: 'Tümü',
                featured: 'Öne Çıkanlar',
                stables: 'Stabiller',
                zksummer: 'ZK Summer',
            },
        },
        option: {
            manage: '{{protocol}} üzerinde',
            soon: 'Yakında',
        },
        migrate: {
            migrate: 'Geçiş Yap',
            title: '%{{apy}} APR ile Kazan',
            subtitle:
                'Yeni Ether havuzu %{{apy}} APR ile yayında. Fonlarınızı tek tıkla yeni havuza aktarın.',
        },
        migratev2: {
            title: 'Daha İyi APR Kazanın!',
            subtext:
                'Mevcut pozisyonlarınızı daha iyi APR seçenekleri için taşıyın.',
            migrate: 'Geçiş Yap',
            back: 'Geri Dön',
            current: 'Mevcut',
            new: 'Yeni Havuz',
        },
        position: {
            details: {
                amount: {
                    withdrawable: 'Çekilebilir Tutar',
                    zk_rewards: 'ZK Ödülleri',
                },
                apr: 'Yıllık Yüzdelik Oran (APR)',
                apy: 'Yıllık Yüzdelik Getiri (APY)',
                title: 'Pozisyon Detayları',
                increase: 'Pozisyonu Artır',
                withdraw: 'Çek',
                collect: 'Topla',
                advanced: {
                    managed: 'Yöneten',
                    liquidity: 'Likidite',
                    token: 'Token',
                    tokens: 'Altta yatan tokenler',
                    pool: 'Havuz URL’si',
                    title: 'Pozisyon Detayları',
                    done: 'Tamam',
                },
                earnings_disclaimer: 'Tahmini ödüller $ZK token cinsindedir',
                earnings_disclaimer_compounded: 'Ödüller pozisyonlara eklenir',
                rewards_disclaimer: 'Ödüller dahil edilmiştir',
                rewards_disclaimer_both:
                    'Eklenen ve toplanabilir ödüller dahil edilmiştir',
                lockup_ready: '{{amount}} çekime hazır',
                lockup_pending:
                    '{{amount}}, {{date}} tarihinde çekime hazır olacak',
                share: 'X’te Paylaş',
                weekly_earnings: 'Haftada {{amount}} kadar kazanabilirsin',
                total_earnings: 'Toplam Getiri',
            },
            information: {
                collectible: {
                    first: 'Bu pozisyonda yalnızca elle toplanabilir getiri bulunmaktadır.',
                    second: 'Daha fazla bilgi için dokunun',
                },
                compounded: {
                    first: 'Bu pozisyonda yalnızca bileşik getiri bulunmaktadır.',
                    second: 'Daha fazla bilgi için dokunun',
                },
                both: {
                    first: 'Bu pozisyonda iki tür getiri bulunmaktadır: Bileşik ve Elle Toplanabilir.',
                    second: 'Daha fazla bilgi için dokunun',
                },
            },
        },
        deposit: {
            title: 'Yatırımlar',
            amount: 'Yatırılacak Tutar',
            reward_tokens: 'Ödül Tokenlerı',
            underlying_tokens: 'Kullanılan Tokenler',
            protocol_fee: 'Protokol Ücreti',
            apr_notice: 'APR piyasa koşullarına göre değişebilir',
            weekly_earnings: 'Tahmini Haftalık Getiri',
            available: '{{balance}} {{symbol}} mevcut',
            max_staking: 'Tutar limitin üstünde',
            continue: 'Devam Et',
            insufficient: 'Yetersiz Bakiye',
            max_staking_alert: 'Adil kullanım için kalan limit: {{amount}}',
            position: 'Pozisyon detayları',
            set_amount: 'Miktar Ayarla',
        },
        withdraw: {
            title: 'Çek',
            title_lockup: 'Çekim Talebi',
            estimate: 'Tahmini değer: {{value}}',
            available: '{{amount}} {{symbol}} mevcut',
            continue: 'Devam Et',
        },
        before: {
            deposit: {
                __description:
                    'Kullanıcı kazanç pozisyonuna başlamadan önce açılan bilgi alt tabakası',
                title: 'Devam Etmeden Önce',
                subtext:
                    'Yatırma sürecine başlamadan önce, bu bilgileri dikkatlice gözden geçirmek karar verme sürecinize rehberlik edecektir.',
                continue: 'Anladım',
                market: {
                    title: 'Düzenlenmemiş Piyasalar',
                    text: "Yatırımlar, varlık kaybına yol açabilecek risklere sahip DeFi'dan faydalanır. Clave, gözetimsiz (non-custodial) bir cüzdandır. Kendi riskinizle yatırım yapın.",
                },
                yield: {
                    title: 'Her Dakika Getiri',
                    text: 'Getiriler havuzun aktivitesine bağlıdır ve günlük olarak değişebilir. Oran, son 24 saatte dayalı yıllık getiri tahminidir.',
                },
                withdraw: {
                    title: 'Esnek Çekim',
                    text: 'Getirileriniz sürekli hesaplanacak ve istediğiniz zaman toplayıp çekebileceksiniz.',
                },
            },
        },
        active: {
            position: {
                amount: 'Tutar',
            },
        },
        banner: {
            info: '1000$ ile {{earn}}$ kadar kazanabilirsiniz',
            learn: 'Daha fazla bilgi için buraya dokunun',
        },
        collect: {
            earnings: {
                title: 'Çek',
                subtext:
                    'Şimdiye kadar {{earningAmount}} kazandınız. Fonlarınızı çekerken ödülünüzü de toplamak ister misiniz?',
                subtext_lockup:
                    'Bu getiri seçeneği ile paranızı sadece önden talep oluşturarak çekebilirsiniz.',
                withdrawal: 'Çekim Tutarı',
                earnings: 'Getiriler',
                withdraw: {
                    both: 'Ödülleri Al ve Çek',
                    bothRequest: 'Ödülleri Al ve Çekim Talep Et',
                    only: 'Sadece Çek',
                    onlyRequest: 'Çekim Talep Et',
                    request: 'Çekim Talebi',
                },
                ten_days: '10 gün',
                waiting_time: 'Bekleme Süresi',
                back: 'Geri Dön',
            },
        },
        counter: {
            title: 'Tahmini Getiriler',
        },
        how_it_works: {
            title: 'Yatırımlar Nasıl Çalışır?',
            subtext:
                'Clave, paranızın kontrolünü elinizde tutarken DeFi’da getiri fırsatlarına kolay erişim sağlayan bir gözetimsiz (self-custodial) cüzdandır.',
            defi: {
                title: 'DeFi Protokollerinden Faydalanma',
                text: 'Paranızı kendi gözetiminizde tutarak kazanç sağlayabilirsiniz.',
            },
            withdraw: {
                title: 'Esnek Çekim',
                text: 'Kazançlarınızla birlikte varlıklarınızı istediğiniz zaman çekebilirsiniz.',
            },
            apr: {
                title: 'Dinamik APR',
                text: 'Kazanç, kullanılan havuzların komisyonlarından gelir ve kullanım oranına bağlı olarak dinamik olarak değişir.',
            },
            continue: 'Kazanmaya Hazırım',
        },
        insufficient: {
            balance: {
                title: 'Yetersiz {{token}} Bakiyesi',
                subtext:
                    'Bu pozisyon hesabınızda {{token}} bulundurmayı gerektirir. Tokenlerınızı {{token}} cinsine Takas ile dönüştürebilir veya doğrudan {{token}} yatırabilir ya da satın alabilirsiniz.',
                swap: '{{token}} Varlığına Takasla',
                deposit: '{{token}} Yatır',
                buy: '{{token}} Satın Al (yakında)',
            },
        },
        yield: {
            information: {
                title: 'Nasıl Kazanırsınız?',
                compound: {
                    title: 'Bileşik Getiri',
                    text: 'Bu getiri {{token}} ödüllerinden gelir ve doğrudan yatırılan miktara eklenir.',
                },
                collectible: {
                    title: 'Elle Toplanabilir Kazanç',
                    text: 'Bunlar kullanılan platformun sağladığı ödüllerdir ve çekim sırasında elle toplanmalıdır.',
                },
                continue: 'Kazanmaya Hazırım',
            },
        },
        lockup_invest_bottom_sheet: {
            title: 'Çekimlerde bekleme süresi mevcuttur',
            subtext:
                'Bu getiri seçeneğinde paranızı sadece önden talebin ardından çekebilirsiniz.',
            text_1: 'Çekim bekleme süresi 10 gündür.',
            text_2: 'Çekilen para miktarını değiştirirseniz, bekleme süresi yeniden başlar.',
            button: 'Devam Et',
        },
        info_bottom_sheet: {
            title: '{{amount}} {{date}} tarihinde çekime hazır olacak.',
            title_ready: 'Bekleyen çekim talebiniz işleme hazır.',
            subtext:
                'Bu getiri türü ile paranızı sadece önden talep ederek çekebilirsiniz.',
            notice: 'Yeni bir talep oluşturursanız, önceki ile birleştirilecek ve 10 günlük bekleme süresi yeniden başlatılacaktır.',
            new_withdraw: 'Yeni Çekim Talebi',
            continue: 'Kazanmaya Devam Et',
        },
    },
    hub: {
        __description: 'Hub Sayfası ve Dashboard’daki Hızlı işlemler',
        title: 'Merkez',
        all_actions: 'Tüm İşlemler',
        start_with: 'Öne Çıkanlar',
        widget: {
            title: 'Hızlı İşlemler',
            see_all: 'Hepsini Gör',
        },
        actions: {
            deposit: 'Para Yatır',
            deposit_text: 'ZKsync Era’daki cüzdanınız ile kripto para ekleyin.',
            earn: 'Yatırım',
            earn_text:
                'ZKsync ağındaki kripto paralarınız ile getiri elde edin.',
            links_text:
                'Ödeme bağlantıları oluşturup arkadaşlarınızla paylaşın.',
            guardians: 'Güvenilir Kişileri Yönet',
            guardians_text: 'Arkadaşlarınızı güvenilir kişi olarak ekleyin.',
            browser: 'Tarayıcı',
            links: 'Ödeme Linkleri',
            split: 'Harcama Bölüştür',
            buy: 'Satın Al',
            invest: 'Yatırım Yap',
            get_started: 'Başlayın',
            benefits: 'Clave ile Ayrıcalıklar',
            benefits_text: 'Kazanımlarınızı inceleyin.',
            soon: '(Yakında)',
            portfolio: 'Portföy',
        },
    },
    recovery_notice: {
        __description:
            'Kullanıcı kurtarma işlemini başlatmaya çalıştığında açılan bilgi alt tabakası',
        title: 'Sosyal Kurtarma',
        subtext:
            'Bu cihazda hesabınıza erişiminiz varsa, bu adımdan sonra kaybedersiniz.',
        approval: 'Anladım',
    },
    zksync_notice_bottom_sheet: {
        title: 'ZKsync Era {{network}}',
        subtext:
            'Sadece ZKsync Era {{network}} üzerine para yatırın. Bu hesaba Ethereum veya başka bir zincirde para gönderirseniz, fonlarınızı kaybedersiniz.',
        approval: 'Anladım',
        never_show: 'Bir daha gösterme',
    },
    no_backup_bottom_sheet: {
        title: 'Yedekleme İçin Bir Güvenilir Kişi Ekleyin',
        subtext:
            'Hesabınızı korumak için lütfen bir güvenilir kişi ekleyin. Bu, mevcut cihazınızı kaybederseniz hesabınıza erişimi geri kazanmanızı sağlar. Güvenilir Kişi olmadan hesabınıza erişemeyebilirsiniz.',
        approval: 'Koruyucu Ekle',
        cancel: 'Daha Sonra Hatırlat',
    },
    claim_link_bottom_sheet: {
        badge: 'Ödemeyi Al',
        badge_loading: 'Ödeme Alınıyor',
        sender: 'Gönderen',
        home: 'Ana Sayfa',
        claim: 'Almak için Tıklayın',
        claimed: 'Ödeme Talep Edildi',
        already_claimed: 'Bu link\nzaten alındı',
        failed_to_claim: 'Ödeme linki\n alınamadı',
    },
    landing: {
        first: "Clave'e\n Hoş Geldiniz",
        firstSubtitle:
            'Kripto paralarınızı günlük uygulamalardan beklediğiniz sadelikle yönetin.',
        second: 'Anında, Ücretsiz,\nGlobal Transferler',
        secondSubtitle:
            'Herhangi birine, herhangi bir zamanda, kullanıcı adları ve ödeme linkleriyle mesajlaşma kadar basit bir şekilde gönderin.',
        third: 'Paranızı Güvenle\nYönetin',
        thirdSubtitle:
            'Anahtar kelimeler olmadan, biyometrik verilerinizle korunan güvenli bir akıllı cüzdan.',
        fourth: 'Tek Tıkla Yatırım\nve Kazanç',
        fourthSubtitle:
            'Kripto paralarınızdan Alış, Satış ve Yatırım özellikleriyle en iyi şekilde yararlanın.',
    },
    privacy_policy_bottom_sheet: {
        title: 'Gizlilik Politikası Güncellendi',
        subtext:
            'Uygulamamızın gizlilik politikasını güncelledik. Clave kullanmaya devam etmek için en son sürümü incelemek isteyebilirsiniz.',
        read: 'Gizlilik politikasını oku',
        approval: 'Kabul ediyorum',
    },
    share_address_bottom_sheet: {
        title: 'ZKsync Ağındaki Adresiniz',
        qrCode: 'ZKsync ağında token almak için bu QR kodunu kullanın.',
        done: 'Tamam',
        share: {
            title: "Önemli: Sadece ZKsync'te Token Gönderin",
            subtext:
                'Diğer cüzdanlardan veya borsalardan token almak için adresinizi kullanın.',
        },
        username_copied: 'Kullanıcı adı kopyalandı',
    },
    send_on_zksync_bottom_sheet: {
        title: 'ZKsync Ağında Gönderim Yapılıyor',
        description:
            'Gönderdiğiniz adresin ZKsync ağında erişilebilir olduğundan emin olun. Aksi takdirde, fonlarınızı kaybedebilirsiniz.',
        accept: 'Gönderdiğim adres ZKsync’i destekliyor',
        button: 'Göndermeye Devam Et',
    },
    progress: {
        bar: {
            step: 'Adım {{currentStep}}/{{stepCount}}',
        },
    },
    address_book_bottom_sheet: {
        title: 'Kullanıcıyı Kişilerine Ekle',
        title_edit: 'Kişi adını düzenle',
        placeholder: 'Kişi adı',
        subtext:
            'Arkadaşınızı kişilerinize ekleyerek onlara gelecekte kolayca para gönderebilirsiniz.',
        label: 'Özel Ad',
        button: 'Kişilere Ekle',
        button_edit: 'Kaydet',
    },
    user_profile: {
        title: 'Profil',
        send_money: 'Para Gönder',
        request: 'Talep Et',
        add_contact: 'Kişilerine Ekle',
        total_sent: 'Toplam Gönderilen',
        total_received: 'Toplam Alınan',
        empty: 'Bu kişiyle olan geçmiş işlemleriniz burada görünecek',
        tx_title: 'İşlemler',
        tags: {
            your_guardian: 'Güvenilir Kişiniz',
            guardian: 'Güvenilir Kişi',
            frequent_sender: 'Sık Gönderilen',
        },
        modify: {
            remove: 'Kişilerinden Kaldır',
            back: 'Geri Dön',
            edit: 'Kişiyi Düzenle',
        },
    },
    dates: {
        Jan: 'Oca',
        Feb: 'Şub',
        Mar: 'Mar',
        Apr: 'Nis',
        May: 'May',
        Jun: 'Haz',
        Jul: 'Tem',
        Aug: 'Ağu',
        Sep: 'Eyl',
        Oct: 'Eki',
        Nov: 'Kas',
        Dec: 'Ara',
        lessThanMinuteAgo: '{{min}} dakika önce',
        lessThanHourAgo: '{{hour}} saat önce',
        yesterday: 'Dün',
        today: 'Bugün',
    },
    notification: {
        guardian_assigned: {
            title: '🛡️ Güvenilir Kişi Atandı',
            body: '{{guardian}} hesabınıza güvenilir kişi olarak atandı',
        },
        guardian_removed: {
            title: '⚠️ Güvenilir Kişi Kaldırıldı',
            body: '{{guardian}} artık hesabınızı kurtarmanıza yardımcı olamaz',
        },
        guardian_added_self: {
            title: '🛡️ Artık bir güvenilir kişisiniz',
            body: '{{username}} sizi güvenilir kişi olarak atadı. Gerektiğinde kurtarma işlemine yardımcı olabilirsiniz',
        },
        guardian_removed_self: {
            title: '🛡️ Artık güvenilir kişi değilsiniz',
            body: '{{username}} sizi güvenilir kişi olarak kaldırdı. Artık hesaplarını kurtarmaya yardımcı olamazsınız',
        },
        transfer_sent: {
            title: '💸 Para gönderdiniz',
            body: '{{recipient}} adlı kişiye {{tokenAmount}} gönderdiniz',
        },
        transfer_received: {
            title: '💰 Para aldınız',
            body: '{{sender}} adlı kişiden {{tokenAmount}} aldınız: {{note}}',
            body_no_note: '{{sender}} adlı kişiden {{tokenAmount}} aldınız',
        },
        join_reward: {
            title: '🎁 Ödülünüz geldi',
            body: "Clave'den {{tokenAmount}} aldınız",
        },
        layerswap_send: {
            title: '🏦 {{tokenAmount}} tutarında para çektiniz',
            body: 'Hesabınızdan {{tokenAmount}} tutarında para çıktı',
        },
        layerswap_receive: {
            title: '🏦 {{tokenAmount}} tutarında para yatırdınız',
            body: 'Hesabınıza {{tokenAmount}} tutarında para yattı',
        },
        onramp_receive: {
            title: '🏦 {{tokenAmount}} tutarında para yatırdınız',
            body: 'Hesabınıza {{tokenAmount}} yatırdınız',
        },
        recovery_initiated: {
            title: '⏳ Kurtarma Başlatıldı',
            body: 'Hesabınız için kurtarma işlemi başlatıldı. Sonraki adımlar için e-postanızı kontrol edin. 48 saatlik bekleme süresi başladı',
        },
        swap: {
            title: '🔄 Takas Başarılı',
            body: '{{inputAmount}} tutarını {{outputAmount}} ile başarıyla takas ettiniz',
        },
        send_link: {
            title: '💸 Bağlantı Oluşturuldu',
            body: '{{tokenAmount}} için bir bağlantı oluşturdunuz',
        },
        claim_link: {
            title: '🪂 Bağlantı Alındı',
            body_no_sender: '{{tokenAmount}} aldınız',
            body: '{{sender}} adlı kişiden {{tokenAmount}} aldınız',
        },
        deposit: {
            title: '🏦 {{token}} Pozisyonuna Yatırıldı',
            body: '{{tokenAmount}} {{token}} kazanmaya başladı',
        },
        claim: {
            title: '💰 Kazanılan Miktar Toplandı',
            body: '{{tokenAmount}} bakiyenize eklendi',
        },
        withdraw: {
            title: '💰 Kazançtan Çekildi',
            body: '{{tokenAmount}} çekildi',
        },
        request_withdraw: {
            title: '🕑 Çekim Talebi Oluşturuldu',
            body: '{{tokenAmount}} tutarında çekim talebi oluşturuldu',
        },
        migrate: {
            title: '🔀 Tokenlerinizi taşıdınız',
            body: 'Yeni kazanç pozisyonuna başarıyla geçiş yaptınız',
        },
        delegate: {
            title: '⚖️ Tokenlerinizi delege ettiniz',
            body: 'Tokenlerinizi {{delegate}} adresine delege ettiniz',
        },
        referral: {
            title: '🎉 Referans ücreti aldınız',
            body: 'Referans ücreti olarak {{amount}} aldınız',
        },
    },
};
