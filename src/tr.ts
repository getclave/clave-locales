/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

export const tr = {
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
                'Clave üzerindeki arkadaşlarınız veya ZKsync Era üzerindeki herhangi bir adresi güvenilir kişi olarak atayabilirsiniz.',
            'subtext-link': 'Daha fazla bilgi için dokunun',
            'subtext-link-url':
                'https://blog.getclave.io/recovery-for-everyone-cloud-and-guardians',
            cancel: 'Yedeklemeyi İptal Et',
            add_new_guardian: 'Yeni Güvenilir Kişiler Ekle',
            add_guardian_max: 'Maksimum Güvenilir Kişi Limiti Aşıldı',
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
                title: 'Güvenilir Kişiyi Kaldır',
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
                "Ayrıca Clave ile Web3'ün tam potansiyelini keşfetmek için Hub'ı inceleyebilirsiniz!",
            step2_title: 'Kullanıcı Adınızı Belirleyin',
            step2_text1:
                'Clave’de ihtiyacınız olan tek şey kullanıcı adlarıdır.',
            step3_title: 'Cüzdanınıza Fon Ekleyin',
            step3_text1:
                "En basit yol, ZKsync Era üzerinde başka bir cüzdandan veya borsadan kripto transferi yapmaktır. Hesap adresinizi Profil'den kopyalayabilirsiniz.",
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
                'Ödediğiniz ücretler üzerinden *{{reward_amount}} cryptoback',
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
                back: 'Giriş sayfasına dön',
            },
            social_recovery_start: {
                title: 'Talebi Güvenilir Kişiyle Paylaş',
                subtext:
                    'Güvenilir kişi talebinizi onayladığında, 48 saatlik bekleme süresi sonunda kurtarma işlemini tamamlayabilirsiniz.',
                share: {
                    title: 'Kurtarma',
                    button: 'Paylaş',
                },
                back: 'Giriş sayfasına dön',
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
            title: 'Miktarı Belirle',
            title_link: 'Bağlantı ile Gönderiliyor',
            sending_with_link: 'Bağlantı ile Gönderiliyor',
            create_payment_link: 'Ödeme Bağlantısı Oluştur',
            set_amount: 'Miktarı Belirle',
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
                    first_banner: 'Clave ile Kazandıklarınız',
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
                second_behefit:
                    '*{{amount1}}, yatırdıkları ilk *{{amount2}} için kazanılır',
                third_benefit: '*{{amount}} ödenen ücretlerden geri kazanım',
                best_way_refer: 'En iyi davet yöntemi',
                send_them_dollar:
                    'Davet kodunuzu içeren bir ödeme bağlantısı gönderin',
            },
            saved_with_clave: {
                title: 'Clave kullanıcısı olduğunuz için teşekkürler{{name}}',
                tx_title: 'İşlemler',
                tx_text: 'Clave, {{txCount}} defa işlem ücreti ödedi.',
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
                subtext: 'Güvenilir kişilerinizi görün ve düzenleyin',
            },
            connected_dapps: {
                title: 'Bağlı Uygulamalar',
                subtext: 'WalletConnect oturumlarını yönetin',
            },
            settings: {
                title: 'Ayarlar',
                subtext: 'Uygulama özelleştirmelerine erişin',
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
            notify_guardians_title: 'Güvenilir Kişilere Bildirim Gönder',
            notify_guardians_subtext: '',
            show_balance: 'Bakiye Görünürlüğü',
            show_balance_subtext: 'Ana ekranınızdaki bakiyeleri gizleyin',
            theme: 'Tema',
            theme_options: 'Tema ve simgeyi özelleştir',
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
            quote: 'Teklif',
            seconds: 'saniye içinde yenileniyor',
        },
        review: {
            title: {
                main: 'Takas',
                input: 'Sat',
                output: 'Al',
            },
            continue: 'Takası İncele',
        },
        settings: {
            bottom_sheet: {
                title: 'Maksimum Slipaj',
                subtext:
                    'Slipaj, likidite değişimlerinden etkilenerek beklenen ve gerçekleşen işlem fiyatları arasında oluşan farkını ifade eder. İşlemlerinizi optimal şekilde yürütmek için slipaj toleransını dikkatlice ayarlayın.',
                save: 'Kaydet',
            },
            title: {
                input: 'Sat',
                output: 'Al',
            },
        },
    },
    walletconnect: {
        connected_dapps: {
            title: 'Bağlı Uygulamalar',
            subtext:
                'Bağlı olduğunuz merkeziyetsiz uygulamalar aşağıda gösterilmektedir.',
            disconnect: 'Bağlantıyı Kes',
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
        swipe: 'Devam etmek için kaydırın',
        release: 'Bırakın',
        proceed: 'Devam etmek için kaydırın',
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
            see_all: 'Tümünü Görüntüle',
            preparing_transactions: 'İşlem Geçmişiniz Hazırlanıyor',
        },
        transaction: {
            from: '{{user}} tarafından',
            to: '{{user}} kişisine',
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
            earnMigrate: 'Yatırımları Taşı',
            cashback: 'Geri ödeme',
            referral: 'Davet Komisyonu',
            reward: 'Ödül',
            details: {
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
                token_swapped: 'Tokenlar takas edildi',
                reclaim_funds: 'Fonları Geri Al',
                reclaim_in_time: '{{time}} içinde geri al',
                gas_fee: 'Ağ Ücreti',
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
                swapping_tokens: 'Tokenlar takas ediliyor',
                sending_transaction: 'İşlem gönderiliyor',
                onramping: 'Onramping devam ediyor',
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
    },
    recover: {
        __description:
            'Bir güvenilir kişi, bağlantıyı aldıktan sonra takip edilen kurtarma süreci',
        title: 'Kurtarma Talebi',
        subtext: 'Kurtarmak istiyor musunuz?',
        function_name: 'Kurtar',
        accept: 'Kurtarma Talebini Kabul Et',
        decline: 'Reddet',
        cancel: {
            home: 'Ana Sayfa',
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
            title: 'Kurtarma talebini reddettiniz!',
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
            release: 'Kabul Edildi',
            sign: 'İmzala',
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
            },
            transfer: {
                sending_to: 'Gönderiliyor',
                creating_link: 'Bağlantı Oluşturuluyor',
                estimated: 'Tahmini Değer',
                first_time: 'İlk Defa Ödeme Yapılan Adres',
                note: 'Not',
                first_time_sending: 'Bu adrese ilk defa ödeme yapılıyor.',
            },
            add_guardian: {
                title: 'Güvenilir Kişi Ekleniyor',
                title_multiple: 'Birden Fazla Güvenilir Kişi Ekleniyor',
                description:
                    'Güvenilir kişiler, hesabınıza erişiminizi kaybederseniz hesabınızı kurtarmanıza yardımcı olabilirler.',
            },
            remove_guardian: {
                title: 'Güvenilir Kişiler Kaldırılıyor',
                description:
                    'Kaldırılan güvenilir kişiler, artık hesabınızda kurtarma işlemi yapamayacaklar.',
            },
            swap: {
                sent: 'Gönderildi',
                received: 'Alındı',
                fee: 'Takas Ücreti',
                rate: 'Oran',
            },
            earn_collect: {
                title: 'Ödüller Toplanıyor',
            },
            earn_withdraw: {
                title: 'Tokenlar Çekiliyor',
                earnings: 'Kazançlar',
                protocol_fee: 'Protokol Ücreti',
            },
            earn_deposit: {
                title: 'Tokenlar Yatırılıyor',
                apr: 'APR',
                protocol_fee: 'Protokol Ücreti',
                estimated_earnings: 'Tahmini Haftalık Kazançlar',
            },
            network_fee: 'Ağ Ücreti',
            swipe: 'Devam Etmek İçin Kaydırın',
            simulating: 'Güvenlik detayları kontrol ediliyor...',
            simulated_success: 'İşlem simülasyon ile doğrulandı',
            simulated_failure: 'İşlem kötü amaçlı olarak işaretlendi',
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
        release: 'Serbest Bırak',
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
    },

    // TBC

    portfolio: {
        __description: 'Portföy sayfası ve token detayları',
        available: 'Mevcut',
        about_token: '{{token}} Hakkında',
        no_chart_data: 'Grafik verisi yok',
        market_cap: 'Piyasa Değeri',
        volume: 'Toplam Hacim',
        my_tokens: 'Tokenlerim',
        my_positions: 'Yatırımlarım',
        header: 'Portföyüm',
        add_custom_token: 'Token Ekle',
        day: '1G',
        week: '1H',
        month: '1A',
        year: '1Y',
        actions: {
            send: 'Gönder',
            request: 'Talep Et',
            swap: 'Takas',
            delegated: 'Devredildi',
            delegate: 'Delege Et',
            buy: 'Satın Al',
            notify: {
                delegated: 'Başarıyla Clave’e devredildi',
            },
            earn: '{{symbol}} ile %{{apr}} APR kazanabilirsiniz',
        },
    },
    empty_state: {
        no_results: 'Sonuç bulunamadı',
    },
    sign: {
        title: 'İmza Talebi',
        release: 'Serbest Bırak',
        reject: 'Reddet',
    },
    split: {
        create_group: {
            create_new: 'Yeni Grup Oluştur',
            group_name: 'Grup Adı',
            enter_group_name: 'Grup adını girin',
            create: 'Oluştur',
            create_error: 'Grup oluşturulamadı',
        },
        groups: {
            title: 'Harcama Bölüştür',
            subtext:
                'Arkadaşlarınızla faturaları ve ödemeleri bölüştürmek için bir grup oluşturabilirsiniz.',
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
                subtext: 'Ödeme bilgilerini girebilirsiniz',
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
                    equally: 'Eşit olarak bölüştürüldü',
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
                spenders: 'Eşit olarak bölüştürüldü',
            },
        },
        review: {
            debts: {
                title: 'Borçları Öde',
                subtext: 'Ödemek istediğiniz borçları seçebilirsiniz.',
                select: 'Tümünü Seç',
                deselect: 'Seçimi Kaldır',
                debt_to: 'Borçlu Olduğunuz Kişi',
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
        __description: 'QR Kod tarayıcı sayfası',
        connect: 'Bir Dapp’e Bağlan',
        send: 'Bir Adrese Gönder',
        aim: 'QR Koda Nişan Al',
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
            done: 'tamam',
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
            add: 'Yeni Para Yatırma',
            back: 'Para yatırma işlemimle ilgili yardıma ihtiyacım var',
            item: {
                title: '{{symbol}} {{network}} üzerinde',
                completed: 'Tamamlandı',
                pending: {
                    layerswap: 'Köprü transferi bekleniyor',
                    user: 'Kullanıcı transferi bekleniyor',
                    popup: 'Beklemede',
                },
                deposit_address: 'Para Yatırma Adresi',
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
                'Para yatırma işleminizle ilgili sorun yaşıyorsanız, Layerswap Destek ile iletişime geçin.',
            back: 'Destek Al',
            time: {
                title: 'Para Yatırma Süreleri',
                text: 'Diğer ağlardan para yatırma işlemi, token ve ağ türüne bağlı olarak 2 ila 30 dakika sürebilir.',
            },
            support: {
                title: 'Teknik Destek',
                text: 'Para yatırma işlevi Layerswap altyapısı ile sağlanır, bu nedenle destek sağlama konusunda en iyi ekip onlardır.',
            },
        },
        start: {
            __description:
                'Earn sayfasında bakiye 0 olduğunda açılan alt sayfa',
            zksync: 'ZKsync Era üzerinde kripto paranız varsa, doğrudan Clave hesabınıza gönderebilirsiniz.',
            networks: {
                title: 'Diğer Ağlar',
                text: 'Diğer ağlardaki kripto paralarınızı Clave’ye Para Yatırma işleviyle aktarabilirsiniz.',
            },
            cex: {
                title: 'Merkezi Borsalar',
                text: 'Borsalarda kripto paranız varsa, bunları da Clave’ye aktarabilirsiniz.',
            },
            title: 'Kazanmak İçin Para Yatırın',
            subtext: 'Hesabınızı aşağıdaki yöntemlerle finanse edebilirsiniz',
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
            title: 'Yeni Para Yatırma',
            option: {
                wallets: 'Bir cüzdandan kripto para yatırın',
                exchanges: 'Bir borsadan kripto para yatırın',
            },
            pending: 'Bekleyen para yatırmalar',
            initiate: 'Yeni Para Yatırma Başlat',
        },
        summary: {
            title: 'Fonları Transfer Et',
            info: {
                first: '{{token}} tokenini sevdiğiniz bir borsadan {{network}} ağı üzerinde transfer edin.',
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
            receive: 'Alacağınız Miktar',
            time: {
                name: 'Tahmini süre',
            },
            min: 'dak',
            continue: 'Para Yatırma Durumunu Görüntüle',
            network: {
                token: '{{token}} {{network}} üzerinde',
            },
        },
        work: {
            __description:
                'Para yatırma sayfası ilk ziyaret edildiğinde açılan alt sayfa',
            title: 'Para Yatırma Nasıl Çalışır?',
            subtext: {
                first: 'Clave hesabınız YALNIZCA ZKsync Era üzerinde.',
                second: 'Fon yatırmak için ya başka bir ZKsync hesabından transfer yapabilir ya da diğer ağlardan transfer için bir köprü kullanabilirsiniz. Lütfen adımları dikkatlice izleyin.',
            },
            continue: 'Başlayın',
            zksync: {
                title: 'ZKsync Era',
                text: 'ZKsync Era üzerinde kripto paranız varsa, doğrudan Clave hesap adresine gönderebilirsiniz.',
            },
            other: {
                title: 'Diğer Ağlar',
                text: 'Diğer ağlardan kripto transferi başlatabilirsiniz.',
            },
            cex: {
                title: 'Merkezi Borsalar',
                text: 'Desteklenen ağlar aracılığıyla merkezi borsalardan kripto transferi başlatabilirsiniz.',
            },
        },
    },
    addMoney: {
        title: 'Para Ekle',
        subtext: 'Cüzdanınıza para eklemek için bir yöntem seçin.',
        onramp: {
            title: 'Banka Havalesi',
            subtext: 'Banka havalesi ile USDC satın alın.',
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
            title: 'Arkadaşlardan İsteyin',
            subtext: 'Bir ödeme talep bağlantısı oluşturun.',
        },
    },
    onramp: {
        bank: {
            title: 'Gönder',
            subtext:
                'Şu kadar alacaksınız: *{{toAmount}} *{{toCurrency}} oranında *{{rate}}.',
            paid: 'Ödedim: {{symbol}}{{amount}}.',
            copied: 'Panoya kopyalandı',
            back: 'Geri Dön',
            continue: 'Devam et',
            cancel: 'İptal et',
        },
        exchange: {
            title: 'Dönüştürme',
            rate: 'Kur',
            fee: {
                processing: 'İşlem Ücreti',
                free: 'Ücretsiz',
                network: 'Ağ Ücreti',
                continue: 'Devam et',
            },
            box: {
                pay: 'Yatır',
                get: 'Al',
                min: 'min {{sign}} {{amount}}',
            },
            review: {
                title: 'İncele',
            },
            phone: { title: 'Hesap:' },
            change: 'Değiştir',
            rate_dif: 'Bankalardan {{percentage}}% daha iyi.',
            max_limit: 'Maksimum onramp limiti {{limit}} {{currency}}',
            continue: 'Devam et',
            back: 'Geri Dön',
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
            no_transaction: 'Onramp işlemleriniz burada gösterilecek.',
        },
        kyc: {
            details: {
                name: {
                    title: 'Bilgileri Tamamlayın',
                    subtext:
                        'Onramp işlemine başlamak için KYC bilgilerini doldurun',
                    name: 'Ad',
                    surname: 'Soyad',
                    choose: 'Cinsiyet Seçin',
                    gender: 'Cinsiyet',
                    male: 'Erkek',
                    female: 'Kadın',
                    continue: 'Devam et',
                },
                birthday: {
                    title: 'Bilgileri Tamamlayın',
                    subtext:
                        'Onramp işlemine başlamak için KYC bilgilerini doldurun',
                    birthday: 'Doğum Günü',
                    date_example: 'GG / AA / YYYY',
                    continue: 'Devam et',
                },
                identity: {
                    title: 'Bilgileri Tamamlayın',
                    subtext:
                        'Onramp işlemine başlamak için KYC bilgilerini doldurun',
                    identity: 'Kimlik Numarası',
                    occupation: 'Meslek',
                    address: 'Adres',
                    city: 'Şehir',
                    postal_code: 'Posta Kodu',
                    continue: 'Devam et',
                    check: 'KYC bilgileri kontrol ediliyor...',
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
                    'KYC için kartınızın bir fotoğrafını istememiz gerekiyor. Şu anda bu belgelerin alındığını varsayıyoruz.',
                camera_permission: 'Kamera İzni',
                camera_permission_message:
                    'Fotoğraf çekmek için ayarlarınızdan kamera iznini etkinleştirin.',
                cancel: 'İptal et',
                open_settings: 'Ayarları Aç',
            },
            phone: {
                title: 'Telefon Numarası',
                subtext:
                    'Yatırımınızı tamamlamak için telefon numaranızı girin.',
                phone: 'Telefon numarası',
                continue: 'Devam et',
            },
            funds: {
                title: 'Birincil Fon Kaynağı',
                subtext: 'Yatıracağınız paranın kaynağı nedir?',
                salary: 'Maaş',
                savings: 'Birikim',
                investments: 'Yatırımlar',
                inheritance: 'Miras',
                credit: 'Kredi',
                continue: 'Devam et',
            },
        },
        transaction: {
            status: {
                title: 'İşlem Doğrulanıyor',
                subtext: 'Bu adımlardan sonra paranız size gönderilecektir',
                payment: {
                    title: 'Ödeme kabul ediliyor',
                    subtext: 'Bu işlem 2 dakika kadar sürebilir.',
                },
                purchase: {
                    title: 'USDC Satın Alınıyor',
                    subtext: 'İşleminizi doğruladık.',
                },
                transfer: {
                    title: 'USDC Transfer Ediliyor',
                    subtext: 'Beklenen süre 30 saniyedir.',
                },
                bank: {
                    show: 'Banka Detaylarını Göster',
                },
                continue: 'Devam et',
                home: 'Ana Sayfa',
            },
        },
        verification: {
            title: 'Doğrulama Beklemede',
            subtext:
                'Bu işlem 3-10 dakika sürer. Bekleyin veya daha sonra tekrar kontrol edin.',
            done: 'Tamam',
        },
        choose: {
            fiat: {
                title: 'Konum Seçin',
                label: 'Arama',
                countries: 'Ülkeler',
                no_option: 'Fiat seçenekleriniz burada görüntülenecek',
            },
        },
        progress: {
            pending: 'Beklemede',
            processing: 'İşleniyor',
            completed: 'Tamamlandı',
        },
        camera: {
            selfie: 'Yüzünüzün bir selfie’sini çekin',
            description: '{{side}} tarafının fotoğrafını çekin',
            front: 'Ön taraf',
            back: 'Arka taraf',
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
                onramp: 'Onramp Desteği',
            },
        },
        notify: {
            alert: {
                title: 'Son Hatırlatma',
                subtext:
                    'Para göndermeden önce tüm uyarıları okuduğunuzu ve anladığınızı onaylıyor musunuz?',
                read: 'Tüm uyarıları okudum.',
                continue: 'Devam et',
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
                claim: 'Kazançlar Toplandı',
                requestWithdraw: 'Çekim İsteği Gönderildi',
            },
            subtext: {
                withdraw:
                    'Tokenlarınız çekildi. Daha fazla kazanmak için her zaman yeniden yatırabilirsiniz.',
                invest: 'Harika! Tokenlarınız şu anda {{apr}}%\nAPR kazandırıyor.',
                claim: 'Tebrikler! Kazançlarınız toplandı\nve bakiyenize eklendi.',
                requestWithdraw:
                    'Talebiniz başarıyla gönderildi.\nFonlarınızı 10 gün sonra çekebileceksiniz.',
            },
            check: 'Kazançlarınızı Kontrol Edin',
            earn: 'Kazan',
            home: 'Ana Sayfa',
            deposited_amount: 'Yatırılan Tutar',
            withdraw_amount: 'Çekilen Tutar',
            weekly_earnings: 'Tahmini Haftalık Kazanç',
            reward_amount: 'Ödül Miktarı',
            lockup_time: 'Çekim Tarihi',
            ten_days: '10 Gün',
        },
        options: {
            title: 'Kazan',
            positions: 'Pozisyonlar',
            options: 'Mevcut Seçenekler',
            banner: {
                learn: 'Daha fazla bilgi için buraya dokunun',
                info: '1000$ ile\n {{earn}}$ kadar kazanabilirsiniz',
            },
            category: {
                all: 'Tümü',
                featured: 'Öne Çıkanlar',
                stables: 'Stables',
                zksummer: 'ZK Summer',
            },
        },
        option: {
            manage: '{{protocol}} üzerinde yönetiliyor',
            soon: 'Yakında',
        },
        migrate: {
            migrate: 'Geçiş Yap',
            title: '{{apy}}% APR ile Kazan',
            subtitle:
                'Yeni Ether havuzu {{apy}}% APR ile yayında. Fonlarınızı tek tıkla yeni havuza aktarın.',
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
                apr: 'Yıllık Yüzde Oranı (APR)',
                apy: 'Yıllık Yüzde Getirisi (APY)',
                title: 'Pozisyon Detayları',
                increase: 'Pozisyonu Artır',
                withdraw: 'Çek',
                collect: 'Topla',
                advanced: {
                    managed: 'Yönetici',
                    liquidity: 'Likidite',
                    token: 'Token',
                    tokens: 'Altta yatan tokenlar',
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
                    '{{amount}} {{date}} tarihinde çekime hazır olacak',
                share: 'X’te Paylaş',
            },
            information: {
                collectible: {
                    first: 'Bu pozisyonda yalnızca toplama türünde kazanç bulunmaktadır.',
                    second: 'Daha fazla bilgi için dokunun',
                },
                compounded: {
                    first: 'Bu pozisyonda yalnızca eklenen kazanç bulunmaktadır.',
                    second: 'Daha fazla bilgi için dokunun',
                },
                both: {
                    first: 'Bu pozisyonda iki tür kazanç bulunmaktadır: Eklenen ve Toplanabilir.',
                    second: 'Daha fazla bilgi için dokunun',
                },
            },
        },
        deposit: {
            title: 'Kazan',
            amount: 'Yatırılacak Tutar',
            reward_tokens: 'Ödül Tokenları',
            underlying_tokens: 'Altta Yatan Tokenlar',
            protocol_fee: 'Protokol Ücreti',
            apr_notice: 'APR piyasa koşullarına göre değişebilir',
            weekly_earnings: 'Tahmini Haftalık Kazanç',
            available: '{{balance}} {{symbol}} mevcut',
            max_staking: 'Tutar limitin üzerinde',
            continue: 'Devam Et',
            insufficient: 'Yetersiz Bakiye',
            max_staking_alert: 'Adil kullanım için kalan limit: {{amount}}',
            position: 'Pozisyon detayları',
            set_amount: 'Miktarı Ayarla',
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
                    'Yatırım sürecine başlamadan önce, bu bilgileri dikkatlice gözden geçirmek karar verme sürecinize rehberlik edecektir.',
                continue: 'Anladım',
                market: {
                    title: 'Düzenlenmemiş Piyasalar',
                    text: 'Earn, varlık kaybına yol açabilecek risklere sahip Defi kullanır. Clave, yönetilmeyen non-custodial bir cüzdandır. Kendi riskinizle yatırım yapın.',
                },
                yield: {
                    title: 'Her Dakika Kazanç',
                    text: 'Kazançlar havuzun aktivitesine bağlıdır ve günlük olarak değişebilir. Oran, son 24 saatteki yıllık getiri tahminidir.',
                },
                withdraw: {
                    title: 'Esnek Çekim',
                    text: 'Kazançlarınız sürekli hesaplanacak ve istediğiniz zaman toplayıp çekebileceksiniz.',
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
                    'Şimdiye kadar {{earningAmount}} kazandınız. Fonlarınızı çekerken ödülünüzü toplamak ister misiniz?',
                subtext_lockup:
                    'Bu kazanç seçeneği ile paranızı sadece talep ile çekebilirsiniz.',
                withdrawal: 'Çekim Tutarı',
                earnings: 'Kazançlar',
                withdraw: {
                    both: 'Topla ve Çek',
                    bothRequest: 'Topla ve Talep Et',
                    only: 'Sadece Çek',
                    onlyRequest: 'Talep Et',
                    request: 'Çekim Talebi',
                },
                ten_days: '10 gün',
                waiting_time: 'Bekleme Süresi',
                back: 'Geri Dön',
            },
        },
        counter: {
            title: 'Tahmini Kazançlar',
        },
        how_it_works: {
            title: 'Kazanç Nasıl Çalışır?',
            subtext:
                'Clave, paranızın kontrolünü elinizde tutarken Defi’de kazanç fırsatlarına kolay erişim sağlayan bir self-custodial cüzdandır.',
            defi: {
                title: 'Defi Protokollerinden Faydalanma',
                text: 'Paranızı kendi gözetiminizde tutarak kazanç sağlayabilirsiniz.',
            },
            withdraw: {
                title: 'Esnek Çekim',
                text: 'Kazançlarınızla birlikte varlıklarınızı istediğiniz zaman çekebilirsiniz.',
            },
            apr: {
                title: 'Dinamik APR',
                text: 'Kazanç, altta yatan havuzun komisyonlarından gelir ve kullanım oranına bağlı olarak dinamik olarak değişir.',
            },
            continue: 'Kazanmaya Hazır',
        },
        insufficient: {
            balance: {
                title: 'Yetersiz {{token}} Bakiyesi',
                subtext:
                    'Bu pozisyon hesabınızda {{token}} gerektirir. Tokenlarınızı {{token}} cinsine Swap ile dönüştürebilir veya doğrudan {{token}} yatırabilir ya da satın alabilirsiniz.',
                swap: '{{token}} ile Değiştir',
                deposit: '{{token}} Yatır',
                buy: '{{token}} Satın Al (yakında)',
            },
        },
        yield: {
            information: {
                title: 'Nasıl Kazanırsınız?',
                compound: {
                    title: 'Biriken Kazanç',
                    text: 'Bu kazanç {{token}} ödüllerinden gelir ve doğrudan yatırılan miktara eklenir.',
                },
                collectible: {
                    title: 'Toplanabilir Kazanç',
                    text: 'Bunlar altta yatan platformun sağladığı ödüllerdir ve çekim sırasında elles toplanmalıdır.',
                },
                continue: 'Kazanmaya Hazır',
            },
        },
        lockup_invest_bottom_sheet: {
            title: 'Çekim süresi zaman kilidine tabi',
            subtext:
                'Bu kazanç seçeneği ile paranızı sadece talep ile çekebilirsiniz.',
            text_1: 'Çekim bekleme süresi 10 gündür.',
            text_2: 'Çekilen para miktarını değiştirirseniz, bekleme süresi yeniden başlar',
            button: 'Devam et',
        },
        info_bottom_sheet: {
            title: '{{amount}} {{date}} tarihinde çekime hazır olacak',
            title_ready: 'Bekleyen çekim talebiniz işleme hazır',
            subtext:
                'Bu kazanç türü ile paranızı sadece talep ile çekebilirsiniz.',
            notice: 'Yeni bir talep oluşturursanız, önceki birleştirilecek ve 10 günlük sayaç yeniden başlayacak',
            new_withdraw: 'Yeni Çekim Talebi',
            continue: 'Kazanmaya Devam Et',
        },
    },
    hub: {
        __description: 'Hub Sayfası ve Dashboard’daki Hızlı işlemler',
        title: 'Hub',
        all_actions: 'Tüm İşlemler',
        start_with: 'Öne Çıkanlar',
        widget: {
            title: 'Hızlı İşlemler',
            see_all: 'Hepsini Gör',
        },
        actions: {
            deposit: 'Para Yatır',
            deposit_text: 'ZKsync Era’daki cüzdanınıza kripto ekleyin.',
            earn: 'Kazan',
            earn_text: 'ZKsync üzerindeki kripto ile kazanmaya başlayın.',
            guardians: 'Koruyucuları Yönet',
            guardians_text:
                'Arkadaşlarınızı ve güvendiğiniz kişileri koruyucu olarak ekleyin.',
            browser: 'Tarayıcı',
            links: 'Ödeme Linkleri',
            split: 'Böl',
            buy: 'Satın Al',
            invest: 'Yatırım Yap',
            get_started: 'Başlayın',
            benefits: 'Clave Avantajlarınız',
            benefits_text: 'Avantajlarınızı inceleyin.',
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
            'Sadece ZKsync Era {{network}} üzerine para yatırın. Bu hesaba Ethereum veya başka bir zincir üzerinde para gönderirseniz, fonlarınızı kaybedersiniz.',
        approval: 'Anladım',
        never_show: 'Bir daha gösterme',
    },
    no_backup_bottom_sheet: {
        title: 'Yedek İçin Bir Koruyucu Ekleyin',
        subtext:
            'Hesabınızı korumak için lütfen bir yedek koruyucu ekleyin. Bu, mevcut cihazınızı kaybederseniz erişimi geri kazanmanızı sağlar. Koruyucu olmadan hesabınıza erişemeyebilirsiniz.',
        approval: 'Koruyucu Ekle',
        cancel: 'Daha Sonra Hatırlat',
    },
    claim_link_bottom_sheet: {
        badge: 'Ödemeyi Talep Et',
        badge_loading: 'Talep Ediliyor',
        sender: 'Gönderen',
        home: 'Ana Sayfa',
        claim: 'Talep Etmek İçin Tıklayın',
        claimed: 'Ödeme Talep Edildi',
        already_claimed: 'Bu link\nzaten talep edildi',
        failed_to_claim: 'Ödeme linki\n talep edilemedi',
    },
    landing: {
        first: 'Clave\nCüzdanına Hoş Geldiniz',
        firstSubtitle:
            'Günlük uygulamalardan beklediğiniz sadelikle kripto paranızı yönetin.',
        second: 'Anında, Ücretsiz,\nGlobal Transferler',
        secondSubtitle:
            'Herhangi birine, herhangi bir zamanda, kullanıcı adları ve ödeme linkleriyle mesajlaşma kadar basit bir şekilde gönderin.',
        third: 'Paranızı Güvenle\nYönetin',
        thirdSubtitle:
            'Tohum cümleleri olmadan, biyometrik verilerinizle korunan güvenli bir akıllı hesap.',
        fourth: 'Tek Tıkla Yatırım\nve Kazanç',
        fourthSubtitle:
            'Kripto yatırımınızdan en iyi şekilde yararlanın; satın alma, satma ve kazanç özellikleriyle.',
    },
    privacy_policy_bottom_sheet: {
        title: 'Gizlilik Politikası Güncellendi',
        subtext:
            'Uygulamamızın gizlilik politikasını güncelledik. Clave kullanmaya devam etmek için en son sürümü incelemek isteyebilirsiniz.',
        read: 'Gizlilik politikasını oku',
        approval: 'Kabul ediyorum',
    },
    share_address_bottom_sheet: {
        title: 'ZKsync Üzerindeki Adresiniz',
        qrCode: 'ZKsync üzerinde token almak için bu QR kodunu kullanın.',
        done: 'Tamam',
        share: {
            title: 'Önemli: Sadece ZKsync Üzerinde Token Gönderin',
            subtext:
                'Diğer cüzdanlardan veya borsalardan token almak için adresinizi kullanın.',
        },
    },
    send_on_zksync_bottom_sheet: {
        title: 'ZKsync Üzerinde Gönderim Yapılıyor',
        description:
            'Gönderdiğiniz adresin ZKsync üzerinde erişilebilir olduğundan emin olun. Aksi takdirde, fonlarınızı kaybedebilirsiniz.',
        accept: 'Gönderdiğim adres ZKsync’i destekliyor',
        button: 'Göndermeye Devam Et',
    },
    progress: {
        bar: {
            step: 'Adım {{currentStep}}/{{stepCount}}',
        },
    },
    address_book_bottom_sheet: {
        title: 'Kullanıcıyı Arkadaşlara Ekle',
        title_edit: 'Arkadaş Adını Düzenle',
        subtext:
            'Arkadaşınızı adres defterinize ekleyerek onlara gelecekte kolayca para gönderebilirsiniz.',
        label: 'Özel Ad',
        button: 'Arkadaşlara Ekle',
        button_edit: 'Kaydet',
    },
    user_profile: {
        title: 'Profil',
        send_money: 'Para Gönder',
        request: 'Talep Et',
        add_contact: 'Kişilere Ekle',
        total_sent: 'Toplam Gönderilen',
        total_received: 'Toplam Alınan',
        empty: 'Bu adresle olan işlemleriniz burada görünecek',
        tx_title: 'İşlemler',
        tags: {
            your_guardian: 'Sizin Koruyucunuz',
            guardian: 'Koruyucu',
            frequent_sender: 'Sık Gönderen',
        },
        modify: {
            remove: 'Arkadaşlardan Kaldır',
            back: 'Geri Dön',
        },
    },
};
