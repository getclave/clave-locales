/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

export const en = {
    locale: 'en',
    general: {
        identifiers: {
            self: 'Me',
        },
    },
    error_codes: {
        '0': 'Unknown',
        '1': 'Unauthorized',
        '4': 'Not found',
        '600': 'Try again',
        '1001': 'Username is already taken',
        '1002': 'Username too short',
        '1003': 'Username too long',
        '1004': 'Username does not exist',
        '1005': 'Email already registered',
        '1006': 'Email already sent',
        '1007': 'Email could not be sent',
        '1008': 'Verification code used',
        '1009': 'Verification code expired',
        '1010': 'Max attempts reached',
        '1011': 'Invalid verification code',
        '1012': 'User not found',
        '1013': 'Public key does not exist',
        '1014': 'Email does not exist',
        '1015': 'Captcha not verified',
        '1016': 'Waitlist code not found',
        '1017': 'Waitlist code already used',
        '1018': 'Invalid waitlist code',
        '1019': 'Invalid email',
        '1020': 'Only letters or numbers are allowed',
        '1021': 'Signature could not be verified',
        '1022': 'Backup could not added',
        '1023': 'Wallet could not be deployed',
        '1024': 'Preferences could not be updated',
        '1025': 'Registration token expired, please start over',
        '1026': 'Recovery not initiated',
        '1027': 'Recovery already started',
        '1028': 'Recovery cloud not started',
        '1029': 'Recovery not executable',
        '1030': 'Recovery cloud not be executed',
        '1031': 'Incorrect password',
        '1032': 'Cloud backup could not be found',
        '1033': 'Error writing to cloud storage',
        '1034': 'Error deleting cloud storage data',
        '1035': 'Could not sign-in with Google, please try again later',
        '1036': 'Minimum 8 characters required',
        '1037': 'Include an uppercase letter.',
        '1038': 'Include a lowercase letter.',
        '1039': 'Include a number.',
        '1040': 'Include a special character.',
        '1041': 'Signing data is corrupted, please try again later',
        '1042': 'Error deleting public key',
        '1043': 'You are already in split group',
        '1044': 'The invite code is invalid',
        '1045': 'The group limit is exceeded',
        '1046': 'The group member limit is exceeded',
        '1047': 'You are not authorized',
        '1048': 'Error claiming Peanut link',
        '1049': 'Wallet does not exist',
        '1050': 'Invalid challenge',
        '1051': 'Login failed',
        '1052': 'User rejected authentication',
        '1053': 'Gas limit too high',
        '9000': 'Something went wrong. Please try again later',
        '9001': 'Insufficient funds to complete the transaction',
        '9002': 'Could not validate the transaction. Please try again later',
        '9003': 'Execution reverted',
    },
    backup: {
        status: {
            added: {
                title: 'Guardians Successfully Added',
                subtext:
                    'You can recover your account with your guardians, with a 48-hours cooldown period.',
            },
            removed: {
                title: 'Guardian Successfully Removed',
                subtext: 'You can always add new guardians in the Backup menu.',
            },
            home: 'Home',
        },
        social: {
            title: 'Social Backup',
            subtext:
                'Your friends on Clave or any addresses on zkSync Era can be assigned as guardians.',
            'subtext-link': 'Tap to learn more',
            'subtext-link-url':
                'https://blog.getclave.io/recovery-for-everyone-cloud-and-guardians',
            cancel: 'Cancel Backup',
            add_new_guardian: 'Add New Guardians',
            add_guardian_max: 'Maximum Guardians Limit Reached',
            guardian: {
                title: 'Add Guardians',
                subtext:
                    'Guardians can assist you in recovering your account on another device.',
                update_fail:
                    'Failed to update notification preferences. Please try again.',
                add_guardian: 'Add Guardians',
                notify: 'Notify Guardians',
                add_another: 'Add Another Guardian',
                add: 'Proceed',
            },
            current_email: 'Email',
            add_guardian_input: {
                own_address: 'You cannot add yourself as a guardian.',
                already_exists: 'This address is already a guardian.',
                label: 'Clave Username / ENS / 0x Address',
                invalid_ens_address: 'Invalid ENS address',
                invalid_address: 'Invalid address',
                invalid_username: 'Invalid username',
                resolved: 'Address: {{address}}',
            },
            notify_guardian_bottom_sheet: {
                title: 'Notifying Guardians',
                subtext:
                    'Only Clave users can receive notifications when you assigned or removed them as guardians.',
                continue: 'I understand',
            },
            empty_state: {
                title: '',
                subtext:
                    'You need to add at least one guardian for Social Backup.',
            },
            remove_guardian_bottom_sheet: {
                title: 'Remove Guardian',
                subtext:
                    'Make sure that you always have at least one guardian.',
                delete: 'I understand, remove anyway',
                cancel: 'Cancel',
            },
        },
    },
    email: {
        title: 'Enter Your Email',
        subtext:
            'Clave will inform you about account’s safety and some important updates.',
        send_error: 'Code could not be send, please try again',
        invalid_email: 'Please enter a valid email',
        same_mail: 'You are already using this email address',
        already_registered: 'Email already registered, try another one.',
        label: 'Email Address',
        placeholder: 'example@gmail.com',
        continue: 'Continue',
        otp_code: {
            title: 'Verify Your Email',
            subtext:
                'Please, enter the verification code we sent to your email',
            invalid_otp_code: 'Invalid Code',
            resend_in: 'Resend code in',
            seconds: 'seconds',
            resend: 'Resend Code',
            continue: 'Continue',
            verify: 'Verify Your Email',
        },
    },
    onboarding: {
        tour: {
            skip: 'Skip',
            deposit: 'Deposit',
            back: 'Back',
            save: 'Save',
            step0_title: 'Introduction to Passkeys',
            step0_text1:
                'With Passkeys, logging into your account is seamless using biometric authentication.',
            step0_text2:
                'You don’t need to set up or remember any passwords to login.',
            step1_title: 'Enjoy Zero Fees!',
            step1_text1:
                'Sending, requesting, and swapping are streamlined using just usernames or links, all without network fees.',
            step1_text2:
                'You can also explore the Hub to unlock the full potential of Web3 with Clave!',
            step2_title: 'Set Your Username',
            step2_text1: 'Usernames are all you need in Clave.',
            step3_title: 'Fund Your Wallet',
            step3_text1:
                'The simplest way is transferring crypto from another wallet or an exchange on zkSync Era. You can copy your account address in the Profile.',
            step3_text2:
                "For crypto on other chains, tap to 'Deposit' to quickly transfer assets to your account.",
        },
        creation: {
            account_creation_done: {
                title: "That's it!",
                subtext: 'Welcome to your Clave account.',
            },
        },
        login: {
            forgot_username: {
                invalid_email: 'Please enter a valid email',
                title: 'Forgot Username',
                subtext:
                    'Clave will send you an email reminding you of your username',
                label: 'Email address',
                placeholder: 'example@gmail.com',
                continue: 'Continue',
            },
            forgot_username_status: {
                success_title: 'Check your mail for your nickname',
                fail_title: 'This email address does not exist in Clave',
                success_subtext:
                    'We sent you an email to remind you of your username. After checking the email, you can access your account again.',
                fail_subtext:
                    'An error occurred while sending the email. Please try again.',
                continue: 'Go to login',
                try_again: 'Try again',
            },
        },
        recovery: {
            __description: 'Starting (requesting) recovery flow',
            enter_address: {
                title: 'Recover Your Account',
                subtext:
                    'Type Clave username or address to recover your account.',
                label: 'Clave Username or Address',
                forgot_username: 'Forgot Your Username?',
                continue: 'Continue',
            },
            not_exist: {
                title: "This wallet doesn't have any recovery options",
                subtext:
                    'This wallet does not have any active backup or assigned guardians. You cannot recover it.',
                back: 'Back',
            },
            started: {
                title: 'Recovery Initiated',
                subtext:
                    'Within the next 48 hours, you will gain access to your account.',
                continue: 'Continue',
            },
            social_recovery_address: {
                title: 'Recover with Your Guardians',
                subtext:
                    'Type Clave username, ENS or address of your guardian.',
                fetch_guardians_error: 'Could not get your guardians',
                enter_valid_address: 'Please enter a valid address',
                registration_error: 'Could not create new passkey',
                continue: 'Continue',
                not_guardian: 'This Address is not Your Guardian',
            },
            social_recovery_execute: {
                title: 'Complete Recovery',
                subtext:
                    'Provide your guardian with the recovery request link so that they can initiate the account recovery process.',
                share: {
                    title: 'Recovery',
                    button: 'Share',
                },
                back: 'Navigate to login page',
            },
            social_recovery_start: {
                title: 'Share Request to Guardian',
                subtext:
                    'When your guardian approves your request, you can complete the recovery process after a 48-hour cooldown period.',
                share: {
                    title: 'Recovery',
                    button: 'Share',
                },
                back: 'Navigate to Login',
            },
            guardian_input: {
                label: 'Clave Username / ENS / 0x Address',
                invalid: {
                    ens_address: 'Invalid ENS address',
                    address: 'Invalid address',
                    username: 'Invalid username',
                    guardian: 'This address not a guardian',
                },
                resolved: 'Address: {{address}}',
            },
        },
        landing: {
            __description: 'The first page of the application',
            log_in: {
                button: 'Create New Account',
                recover: 'Recover Your Account',
                login: 'Log in',
            },
            intro: {
                title: 'Welcome to Clave',
                description: 'One click onboarding to Web3',
            },
            middle: {
                title: 'Smartest and Safest Accounts',
                description:
                    'Your assets are protected by hardware level security.',
            },
            last: {
                option1:
                    'Send & Receive money instantly with nicknames and links',
                option2: 'Pay gas with any token',
                option3: 'Add your friends as a guardian for recovery',
                option4: 'Powered by zkSync',
            },
        },
    },
    receive: {
        available: '{{amount}} {{symbol}} Available',
        set_amount: 'Request',
        title: 'Request',
        share: {
            title: 'Wallet Address',
        },
        request_payment: 'Create payment request link',
        continue: 'Continue',
        deeplink: {
            share: {
                title: 'Request Payment',
                button: 'Share Link',
            },
            title: 'Request Payment',
            home: 'Home',
        },
    },
    send: {
        amount: {
            continue: 'Continue',
            insufficient: 'Insufficient Balance',
            sending_to: 'Sending to',
            could_not_estimate: 'Unable to Estimate Amount',
            send: 'Send',
            title: 'Set Amount',
            title_link: 'Sending with Link',
            sending_with_link: 'Sending with Link',
            create_payment_link: 'Create Payment Link',
            set_amount: 'Set Amount',
            available: '{{amount}} {{symbol}} Available',
        },
        link_created: {
            title: 'Payment Link is Ready',
            description:
                'The link recipient can claim the money with their Clave account.',
            link_title: 'Payment Link',
            details_title: 'Transaction Details',
            amount: 'Amount',
            token: 'Token',
            share: {
                title: '{{link}}',
                button: 'Share Link',
            },
            share_link: 'Share Link',
            home: 'Home',
        },
        claim_link: {
            title: 'Claim Funds',
            subtext: 'Claim {{amount}}',
            claim_button: 'Claim',
            home: 'Home',
            claiming_funds: 'Claiming',
            already_claimed: 'Already Claimed',
            error: {
                claim: 'Unable to claim funds',
                fetch: 'Unable to fetch link details',
            },
            notification: 'Transaction sent successfully.',
        },
        link_claimed: {
            title: 'Funds are claimed',
            subtext: 'You have successfully received {{amount}}',
            home: 'Home',
        },
        created_links: {
            create_new_link: 'Create New Link ',
            list_header: 'Links Created by You',
            title: 'Payment Links',
            no_links: 'You have no unclaimed links',
            no_link_button: 'Home',
        },
        enter_address: {
            title: 'Enter Recipient',
            error_invalid_address: 'Please enter a valid address',
            error_invalid_username: 'Please enter a valid username',
            resolved: 'Resolved to {{address}}',
            label: 'Clave Username / ENS / Address',
            continue: 'Continue',
            contacts: 'Contacts',
            clear: 'Clear',
            clear_history: 'Clear History',
            clear_history_message: 'Are you sure?',
            cancel: 'Cancel',
            no_results:
                'No results found. If you do not know the recipient address, you can send money with link to anyone',
            search_results: 'Search Results',
            recently_sended: 'Recently Sent',
            send_with_link: 'Send with Link',
        },
        qr_scan: {
            invalid_qr: 'Invalid QR code',
        },
        send_with_link_bottomsheet: {
            title: 'Sending with link',
            description:
                'You will create a link with money embedded in it. Anyone with a Clave account can claim this money. You can check your payment links in Home and cancel them if you want.',
            button: 'I understand, continue',
            never_show: 'Do not show again',
        },
    },
    dashboard: {
        address: 'Tap to view address',
        card: {
            title: 'Account Balance',
            activate: 'Activate Account',
        },
        actions: {
            request: 'Request',
            send: 'Send',
            swap: 'Swap',
        },
        recovery_alert_item: {
            social: "A social recovery has begun for your account. If not canceled within 48 hours, you'll lose access. Tap here to cancel.",
        },
        token_amount: {
            available: 'Balance',
        },
        estimated_quantity: 'Estimated Amount:',
        portfolio: {
            my_tokens: 'Tokens',
            my_positions: 'Positions',
            earning: 'APR: {{apr}}%',
        },
    },
    settings: {
        main: {
            title: 'Settings',
            version: 'Clave Version:',
        },
        profile: {
            main: {
                title: 'Profile',
                account_settings: 'Account Settings',
            },
            saved_with_clave: {
                title: 'Thanks for being a Clave user{{name}}',
                tx_title: 'Transactions',
                tx_text: 'Clave sponsored {{txCount}} transactions',
                earn_title: 'Earn Positions',
                earn_text: 'Your total yield earnings',
                earn_cta: 'Start earning',
                button: 'Share on X',
            },
            card: {
                address: 'Address',
                address_copied: 'Address Copied',
                set_username: 'Set Username',
                no_username: 'No username',
                copy_address: 'Copy Address',
            },
            rewards: {
                title: 'Badges & Rewards',
                subtext: '',
            },
            social_recovery: {
                title: 'Account Security',
                subtext: '',
            },
            backup: {
                title: 'Social Backup',
                subtext: 'View and configure your guardians',
            },
            connected_dapps: {
                title: 'Connected Dapps',
                subtext: 'Manage WalletConnect sessions',
            },
            settings: {
                title: 'Settings',
                subtext: 'Access app customizations',
            },
            logout: 'Log out',
            logout_subtext: 'Sign out from your account',
            logout_sure: 'Are you sure?',
            cancel: 'Cancel',
        },
        group: {
            __description: 'Settings group headers',
            app_settings: 'App Settings',
            share: 'Share & Help',
            advanced: 'Advanced Settings',
        },
        advanced: {
            logs: {
                title: 'Logs',
                subtext: '',
            },
            delete_account: {
                title: 'Delete Account',
                subtext: 'Delete your Clave account',
                confirm:
                    'Are you sure you want to delete your account? You will no longer be able to access your account.',
                cancel: 'Cancel',
                delete: 'Delete',
                delete_error: 'Your account could not be deleted',
            },
        },
        notifications: {
            title: 'Notifications',
            subtext: 'Manage notification preferences',
        },
        preferences: {
            title: 'Preferences',
            subtext: 'Currency settings',
            language: 'Language',
            and_more: ', and more',
            update_fail:
                'Could not update notification preferences, please try again',
            notification: 'Notifications',
            allow_notifications_title: 'Allow Notifications',
            allow_notifications_subtext: '',
            notify_guardians_title: 'Notify Guardians',
            notify_guardians_subtext: '',
            show_balance: 'Balance Visibility',
            show_balance_subtext: 'Hide balances in your home screen',
            theme: 'Theme',
            theme_options: 'Customize theme and icon',
            appearance: 'Appearance',
            icon: 'Icon',
            advanced: 'Advanced',
            advanced_subtext: 'More advanced settings for Clave',
        },
        share: {
            title: 'Share Clave',
            subtext: 'Share Clave with your friends',
        },
        feedback: {
            title: 'Give us a feedback',
            subtext: 'Your feedbacks are important for us',
        },
        twitter: {
            title: 'Follow us',
            subtext: 'Follow us on Twitter (X)',
        },
        about: {
            title: 'About Clave',
            subtext: 'Terms, privacy, and channels',
            terms_and_conditions: {
                title: 'Terms and Conditions',
                subtext: '',
            },
            privacy_policy: {
                title: 'Privacy Policy',
                subtext: '',
            },
        },
        balance: {
            title: 'Balance',
            show_balances_title: 'Show Balances',
            show_balances_subtext: '',
            hide_zero_balances_title: 'Hide Zero Balances',
            hide_zero_balances_subtext: '',
        },
        share_help: {
            twitter: 'Follow us on X',
            twitter_subtext: '',
            discord: 'Join us on Discord',
            discord_subtext: '',
            telegram: 'Join us on Telegram',
            telegram_subtext: '',
        },
    },
    swap: {
        fetch_error: 'The quote could not be fetched',
        impact: 'Price impact {{impact}}%',
        insufficient: 'Insufficient Balance',
        status: {
            title: 'Swap Completed',
            subtext: 'Swap transaction was completed successfully',
            home: 'Home',
            add_token_error: 'Could not add token to your list',
        },
        fee: {
            bottom_sheet: {
                title: 'Swap Fees',
                subtext: 'A fee of 0.5% is included to this swap quote.',
                understand: 'I understand',
            },
        },
        swap_box: {
            insufficient: 'Insufficient Balance',
            max: 'Max',
            balance: 'Balance: ',
            select_token: 'Select token',
        },
        confirm: {
            title: 'Review Swap',
            from: 'From',
            to: 'To',
            rate: 'Rate',
            total_fee: 'Total fee',
            fees: 'Fees',
            function_name: 'Swap',
            gas_fee: 'Network Fee',
            clave_fee: 'Clave Fee',
            continue: 'Continue',
            cancel: 'Cancel Swap',
        },
        quote_info: {
            quote: 'Quote refreshes in',
            seconds: 'seconds',
        },
        review: {
            title: {
                main: 'Swap',
                input: 'From',
                output: 'To',
            },
            continue: 'Review Swap',
        },
        settings: {
            bottom_sheet: {
                title: 'Max Slippage',
                subtext:
                    'Slippage refers to the difference between expected and executed trade prices, affected by liquidity changes. Adjust slippage tolerance cautiously for optimal trade execution.',
                save: 'Save',
            },
            title: {
                input: 'Swap from',
                output: 'Swap to',
            },
        },
    },
    walletconnect: {
        connected_dapps: {
            title: 'Connected Dapps',
            subtext:
                'Your connected decentralized applications are shown below',
            disconnect: 'Disconnect',
        },
        empty_state: {
            title: 'No connected Dapps',
            subtext: '',
        },
        title: '{{name}} wants to connect',
        invalid_chain: 'Invalid chain',
        connect: 'Connect',
        connected: 'Connected successfully',
        application: 'Application',
        send_requests: 'Send requests for approvals',
        see_activity: 'See balance and activity',
        send_transaction: 'Send transaction on behalf of you',
        signature_request: 'Signature Request',
        accept: 'Swipe to Connect',
        reject: 'Reject',
        no_camera_title: 'Camera not Allowed',
        no_camera_subtitle: 'Please allow the camera to scan QR code',
        no_camera_button: 'Open settings',
        swipe: 'Swipe to Continue',
        release: 'Release',
        proceed: 'Swipe to Proceed',
        invalid_qr_code: 'Invalid QR Code',
        mismatch: 'Domain mismatch',
        mismatch_subtext:
            'This website has a domain that does not match the sender of this request. Approving may lead to loss of funds.',
        not_verified: 'Could not verify',
        not_verified_subtext:
            'This domain cannot be verified. Check the request carefully before approving',
        network: 'Network',
        Account: 'Account',
    },
    history: {
        main: {
            title: 'Transaction History',
            no_transactions: 'No transactions found',
            load_more_transactions: 'Load More Transactions',
            see_all: 'View All',
            preparing_transactions: 'Preparing Your Transaction History',
        },
        transaction: {
            from: 'From {{user}}',
            to: 'To {{user}}',
            self: 'Me',
            failed: 'Failed',
            transfer: 'Transfer',
            guardian_added: 'Guardian added',
            contract_interaction: 'Contract interaction',
            guardian_removed: 'Guardian removed',
            transfer_link_created: 'Payment link created',
            transfer_link_claimed: 'Claimed from link',
            claimed_by_user: 'Claimed by {{user}}',
            created_by_user: 'Created by {{user}}',
            swap: 'Swap',
            fail: 'Failed',
            earnDeposit: 'Deposit to Earn',
            earnDepositSubtitle: '{{tokenSymbol}} on {{protocol}}',
            earnWithdraw: 'Withdraw from Earn',
            earnWithdrawSubtitle: '{{tokenSymbol}} on {{protocol}}',
            earnClaim: 'Claim from Earn',
            earnClaimSubtitle: '{{tokenSymbol}} on {{protocol}}',
            details: {
                me: 'me',
                tx_type: 'Tx Type',
                token_sent: 'Token Sent',
                token_received: 'Token Received',
                recipient: 'Recipient',
                sender: 'Sender',
                token_type: 'Token Type',
                transaction_success: 'Transaction Successful',
                transaction_fail: 'Transaction Failed',
                guardian_name: 'Guardian Name',
                sent_to_or_from: '{{sentOrReceived}} {{type}} {{user}}',
                add_token: 'Add Token',
                token_swapped: 'Tokens swapped',
                reclaim_funds: 'Reclaim Funds',
                reclaim_in_time: 'Reclaim in {{time}}',
                gas_fee: 'Network Fee',
                earn_details: {
                    withdraw_title: 'Withdraw {{amount}}',
                    deposit_title: 'Deposit {{amount}}',
                    claim_title: 'Claim {{amount}}',
                },
            },
            pending: {
                timeout: 'Something went wrong',
                pending: 'Pending',
                sending_funds: 'Sending funds',
                claiming_funds: 'Claiming funds',
                swapping_tokens: 'Swapping',
                sending_transaction: 'Sending transaction',
            },
        },
        no_transaction: {
            title: "You don't have any transactions.",
        },
        error: {
            fetch_error: 'An error occurred while fetching transaction history',
        },
    },
    browser: {
        title: 'Browser',
        search: 'Search for a Dapp',
        empty_state_favorites: 'Add dapps to favourites to access them quickly',
        favorites: 'Favorites',
        search_placeholder: 'Search or enter website',
    },
    recover: {
        __description:
            'Recover flow that is followed by a guardian after receiving link',
        title: 'Requested Recovery',
        subtext: 'Do you want to recover?',
        function_name: 'Recover',
        accept: 'Accept Recovery Request',
        decline: 'Reject',
        cancel: {
            home: 'Home',
            title: 'You’ve cancelled the recovery process!',
            subtext:
                "If you don't want your guardian to start recovery again, you can remove them from Backup page.",
        },
        execute: {
            title: 'Complete Recovery',
            subtext:
                '48-hours cooldown period passed and you can complete the recovery process.',
            function_name: 'Execute Recovery',
            approve: 'Complete Recovery',
            decline: 'Reject',
        },
        reject: {
            title: 'You have rejected the recovery request!',
            subtext: 'Recovery will not be initiated.',
            home: 'Home',
        },
        start: {
            user_title: 'Recovery started successfully',
            someone_title: 'Recovery is already started',
            user_subtitle:
                'The recovery process will be ready to complete after a 48-hour cooldown period.',
            home: 'Home',
        },
        sign_bottom_sheet: {
            title: 'Signature Request',
            description:
                'Signing this message approves that you are accepting to recover this account as its guardian. This account will be ready for completing recovery in 48-hour cooldown period. After that, you will be able to complete recovery from the same link that is sent to you.',
            release: 'Accepted',
            sign: 'Sign',
        },
    },
    set_username: {
        __description: 'Page to set username from profile or from onboarding',
        title: 'Set Username',
        subtext: 'Usernames are all you need in Clave.',
        placeholder: 'Enter Username',
        label: 'Username',
        continue: 'Set Username',
        later: 'Remind me later',
    },
    token_selection: {
        __description: 'Page to select token on send & request',
        send: 'Select token',
        request: 'Select token',
    },
    transaction: {
        __description:
            'The translations related to flow when transaction is sent',
        approve: {
            title: 'Summary',
            back: 'Back',
            type: 'Type',
            sender: 'Sender',
            recipient: 'Recipient',
            gas_token: 'Fee paid with',
            approve: 'Allow spending limit',
            contract_interaction: 'Contract interaction',
            paid_by: 'Network Fee Paid by',
            paid_with: 'Network Fee Paid with',
            estimated_gas_fee: 'Network Fee',
            amount: 'Amount',
            contract_address: 'Contract Address',
            swipe: 'Swipe to Confirm',
            insufficient_balance: 'Insufficient balance',
            free: 'Free',
            approve_token: 'Approve Token',
        },
        fee: {
            title: 'Transaction Fee',
            proceed: 'Continue',
            total_gas_fee: 'Total Network Fee',
            free: 'Free',
            pay_option: 'Pay with',
        },
        status: {
            success: 'Transaction Successful',
            failed: 'Transaction Failed',
            home: 'Home',
            details: 'Transaction details',
            link: {
                first: 'Open',
                second: 'transaction details',
                third: 'in the blockchain explorer.',
            },
            link_left: 'To see your transaction details, open',
            link_right: 'in explorer.',
            tx_link: 'TX link',
            time: 'Time',
            token_amount: 'Token Amount',
            gas_fee: 'Network Fee',
        },
        estimating_gas_fee: 'Estimating Network Fee',
        reject: 'Reject',
        release: 'Release',
        estimate_gas_failed: 'The transaction is expected to fail',
        notification: 'Transaction sent successfully.',
    },
    navbar: {
        home: 'Home',
        hub: 'Hub',
        profile: 'Profile',
    },
    custom_token: {
        __description:
            'Bottom sheet that pops up when Add Token button is pressed on portfolio',
        token_address: 'Address',
        token_name: 'Name',
        add: 'Add Custom Tokens',
        invalid_address: 'Invalid address',
        error: 'Token could not be added',
        max_custom_token: 'You can add up to 30 custom tokens',
        token_already_exists: 'Token already exists',
        search: 'Search token',
        add_manually: 'Add Manually',
    },
    portfolio: {
        __description: 'Portfolio page and token details',
        available: 'Available',
        about_token: 'About {{token}}',
        no_chart_data: 'No chart data',
        market_cap: 'Market Cap',
        volume: 'Total Volume',
        my_tokens: 'Tokens',
        my_positions: 'Positions',
        header: 'My Portfolio',
        add_custom_token: 'Add Token',
        day: '1D',
        week: '1W',
        month: '1M',
        year: '1Y',
        actions: {
            send: 'Send',
            request: 'Request',
            swap: 'Swap',
        },
    },
    empty_state: {
        no_results: 'No results found',
    },
    sign: {
        title: 'Signature Request',
        swipe: 'Swipe to Confirm',
        reject: 'Reject',
    },
    split: {
        create_group: {
            create_new: 'Create New Group',
            group_name: 'Group Name',
            enter_group_name: 'Enter group name',
            create: 'Create',
            create_error: 'Split group could not be created',
        },
        groups: {
            title: 'Split',
            subtext:
                'You can create a group with your friends to split bills and payments.',
            no_groups: "You don't have any groups",
            add: 'Create New Group',
            join_error: 'You could not join the group',
            members: '{{count}} people',
            alert: {
                title: 'Join Group',
                sure: 'Are you sure?',
                cancel: 'Cancel',
                join: 'Join',
            },
        },
        group: {
            participants: 'Participants',
            update_error: 'Group name could not be updated',
            add_payment: 'Add Payment',
            created: {
                info: {
                    members: 'Members',
                },
            },
            edit: {
                title: 'Edit Group',
                label: 'Name',
                members: 'Members',
                leave: {
                    title: 'Leave Group',
                    subtext: '',
                    disabled: {
                        subtext: {
                            owe: 'You need to pay your debts first',
                            owed: 'You need to collect your debts first',
                        },
                    },
                },
                delete: {
                    title: 'Delete group',
                    subtext: 'Deleting group is not reversible.',
                },
            },
            delete: {
                alert: {
                    error: 'You could not delete group',
                },
                title: 'Delete Split Group',
                subtext: 'Are you sure?',
                delete: 'Yes, delete',
                cancel: 'Cancel',
            },
            leave: {
                alert: {
                    error: 'You could not leave group',
                },
                title: 'Leave Group',
                subtext: 'Are you sure?',
                leave: 'Yes, leave',
                cancel: 'Cancel',
                disabled: {
                    subtext: {
                        owe: 'You need to pay your debts first',
                        owed: 'You need to collect your debts first',
                    },
                },
            },
            join: {
                participants: '{{count}} Participants',
                subtext: 'You have been invited to {{name}} group.',
                accept: 'Accept',
                cancel: 'Reject',
            },
        },
        invite: {
            card: {
                invite: 'Invite Your Friends',
                description: 'Copy or share link',
            },
        },
        payments: {
            title: 'Latest Payments',
            no_payments: "You don't have any payments",
            paid_by: 'Paid by {{name}}',
            delete: {
                alert: {
                    error: 'Payment could not be deleted.',
                    success: 'Payment deleted successfully!',
                    title: 'Delete Payment',
                    subtext: 'Are you sure?',
                    delete: 'Delete',
                    cancel: 'Cancel',
                },
            },
        },
        payment: {
            new: {
                title: 'Add Payment',
                subtext: 'You can enter payment information',
                too_long: 'Name is too long, please use a shorter name.',
                too_small: 'Minimum amount is $0.10',
                label: {
                    name: 'Name',
                    amount: 'Amount',
                },
                continue: 'Proceed',
                summary: {
                    paid: 'Paid',
                    members: 'Group members',
                    complete: 'Complete',
                    more: 'and {{count}} more',
                    title: 'Payment Summary',
                    payer: 'Paid by',
                    equally: 'Splitted Equally to',
                    per: 'per person',
                },
            },
            option: {
                title: 'Payment Method?',
                crypto: 'Pay with Crypto',
                cash: 'Paid with Cash',
                alert: {
                    cash: {
                        title: 'Paid with Cash',
                        sure: 'Selected debts will be marked as paid',
                        cancel: 'Cancel',
                        pay: 'Confirm',
                    },
                },
            },
        },
        spending: {
            detail: {
                payer: 'Paid by',
                spenders: 'Splitted Equally to',
            },
        },
        review: {
            debts: {
                title: 'Pay Debts',
                subtext: 'You can select the debts you want to pay.',
                select: 'Select all',
                deselect: 'Deselect all',
                debt_to: 'Debt to',
                no_debts: "You don't have any debts yet",
                pay: 'Pay Debts',
            },
        },
        who: {
            paid: {
                title: 'Paid by',
                label: 'Member name',
                me: 'Me',
                members: 'Group members',
            },
        },
        add_payment: {
            add: 'Add',
            new: 'New payment',
            debt: 'Debt clearance',
        },
        total_owed: {
            card: {
                title: {
                    creditor: 'You are owed',
                    debtor: 'You owe',
                },
                symbol: '$',
                pay: 'Pay Debts',
                no_debts: 'No Debts',
            },
        },
        select: {
            payer: {
                title: 'Paid by',
                me: 'Me',
                members: 'Group Members',
            },
            spenders: {
                title: 'Splitted Equally to',
                members: 'Group Members',
                select: 'Select all',
                deselect: 'Deselect all',
                continue: 'Continue',
            },
            token: {
                insufficient_balance: 'Insufficient balance',
                pay: 'Pay Debts',
                title: 'Pay with Crypto',
            },
        },
        controller: {
            paid: 'Paid',
            other: 'Other',
            eat: 'Eat',
            travel: 'Travel',
            ticket: 'Ticket',
            loan: 'Loan',
            debt: 'Debt',
        },
    },
    qrinfo: {
        __description: 'QR Code scanner page',
        connect: 'Connect to a Dapp',
        send: 'Send to an Address',
        aim: 'Aim at the QR Code',
        you_can_scan: 'You can scan to',
    },
    share_bottom_sheet: {
        __description:
            'The bottom sheet that pops up when address button is clicked on dashboard, or zksync is selected on deposit',
        title: 'Your Account on zkSync Era',
        share: {
            subtext:
                'Use this address to deposit or request. Do not send to this address on Ethereum or other networks.',
            qrCode: 'Show this QR code to deposit or request.',
            done: 'done',
        },
    },
    deposit: {
        __description: 'Deposit page related translations',
        network: {
            __description: 'Deposit options page where networs are listed',
            option: {
                cost: 'Cost',
                speed: 'Speed',
                time: '{{time}} min',
            },
            warning: {
                subtext: {
                    first: 'You need to transfer',
                    third: 'from another wallet or centralized exchange to the address below on the',
                    fifth: 'network.',
                },
                continue: 'I understood, proceed',
            },
        },
        option: {
            __description:
                'Subtitle of the boxes on initial deposit page where user chooses zksync or other networks',
            networks: 'Networks',
        },
        status: {
            title: 'Deposit Status',
            no_deposits: 'Your deposits will be accessible in here',
            add: 'New Deposit',
            back: 'I need help with my deposit',
            item: {
                title: '{{amount}} {{symbol}} on {{network}}',
                completed: 'Completed',
                pending: {
                    layerswap: 'Pending bridge transfer',
                    user: 'Pending user transfer',
                    popup: 'Pending',
                },
                learn: 'Tap to learn more',
            },
        },
        support: {
            title: 'Get Support',
            subtext:
                'If you’re having issues about your deposit, get in touch with Layerswap Support.',
            back: 'Get Support',
            time: {
                title: 'Deposit Times',
                text: 'Depositing from other networks can take anywhere from 2 to 30 minutes, depending on the token and network.',
            },
            support: {
                title: 'Technical Support',
                text: 'The deposit function is powered by Layerswap infrastructure, which is why they are best equipped to provide you with support.',
            },
        },
        start: {
            __description:
                'The bottom sheet that is opened when balance is 0 on Earn page',
            zksync: 'If you have crypto on zksync Era you can directly send to Clave account.',
            networks: {
                title: 'Other Networks',
                text: 'You can transfer your crypto on other networks to Clave with Deposit function.',
            },
            cex: {
                title: 'Centralized Exchanges',
                text: 'If you are holding crypto on exchanges, you can also transfer them to Clave.',
            },
            title: 'Deposit to Start Earning',
            subtext: 'You can fund your account via following methods',
            deposit: 'Deposit',
        },
        token: {
            __description: 'Token selection page',
            bottom_sheet: {
                title: 'Deposit Token',
            },
        },
        choose: {
            asset: {
                min: 'Min amount is {{min}} {{token}}',
                max: 'Max amount is {{max}} {{token}}',
                title: 'Deposit on {{network}}',
                limit: 'Min: {{min}}, Max: {{max}}',
                receive: 'You will receive',
                fee: 'Fee',
                time: 'Time',
                minute: 'min',
                continue: 'Continue',
            },
            network: {
                title: 'Choose Network',
                no_deposits: 'Your deposits will be accessible in here',
            },
        },
        new: {
            title: 'New Deposit',
            option: {
                zksync: 'Deposit crypto on zkSync Era',
                others: 'Deposit crypto from other networks',
            },
            pending: 'Pending deposits',
            initiate: 'Initiate New Deposit',
        },
        summary: {
            title: 'Transfer Funds',
            info: 'When you complete the transfer on selected network, your funds will be transferred to your Clave account automatically by Layerswap.',
            deposit: {
                address: 'Deposit Address',
                amount: 'Deposit Amount',
            },
            amount: 'Amount',
            receive: 'You will receive',
            time: {
                name: 'Estimated time',
            },
            min: 'min',
            continue: 'View Deposit Status',
        },
        work: {
            __description:
                'The bottom sheet that is opened for the first time when deposit page is visited',
            title: 'How Deposit works?',
            subtext: {
                first: 'Your Clave account is ONLY on zkSync Era.',
                second: 'To deposit funds, you can either transfer from another zkSync account or use a bridge to transfer from other networks. Please follow the steps carefully.',
            },
            continue: 'Get Started',
            zksync: {
                title: 'zkSync Era',
                text: 'If you have crypto on zksync Era, you can directly send to Clave account address.',
            },
            other: {
                title: 'Other Networks',
                text: 'You can initiate a deposit for crypto from other networks.',
            },
            cex: {
                title: 'Centralized Exchanges',
                text: 'You can initiate a deposit for crypto from centralized exchanges via supported networks.',
            },
        },
    },
    invest: {
        __description: 'Earn page related translations',
        completed: {
            __description:
                'Earn page showing the results of Earn-related transactions',
            title: {
                invest: '{{amount}} {{symbol}} Deposited',
                withdraw: '{{amount}} {{symbol}} Withdrawn',
            },
            subtext: {
                withdraw: 'You can always deposit and start earning yields!',
                invest: 'You are now earning {{apy}}% APR for this position.',
            },
            earn: {
                invest: 'Check Your Earnings',
                withdraw: 'Earn',
            },
            home: 'Home',
        },
        options: {
            title: 'Earn',
            positions: 'Positions',
            options: 'Available Options',
        },
        option: {
            manage: 'On {{protocol}}',
            soon: 'Soon',
            stake: 'Stake now',
        },
        position: {
            details: {
                amount: {
                    withdrawable: 'Withdrawable Amount',
                    compounded: 'Compounded Amount',
                    deposited: 'Deposited Amount',
                },
                apr: 'Annual Percentage Rate (APR)',
                apy: 'Annual Percentage Yield (APY)',
                earnings: {
                    compounded: 'Compounded Earnings',
                    collectable: 'Collectable Earnings',
                },
                title: 'Position Details',
                increase: 'Increase position',
                withdraw: 'Withdraw',
                collect: 'Collect',
                advanced: {
                    managed: 'Managed by',
                    liquidity: 'Liquidity',
                    token: 'Token',
                    tokens: 'Underlying tokens',
                    pool: 'Pool URL',
                    title: 'Position Details',
                    done: 'Done',
                },
            },
            information: {
                collectible: {
                    first: 'There is single type of yield in this position: Collectible.',
                    second: 'Tap to learn more',
                },
                compounded: {
                    first: 'There is single type of yield in this position: Compounded.',
                    second: 'Tap to learn more',
                },
                both: {
                    first: 'There are two types of yield earnings in this position: Compounded and Collectible.',
                    second: 'Tap to learn more',
                },
            },
        },
        deposit: {
            title: 'Earn',
            available: '{{balance}} {{symbol}} available',
            min_amount: 'Minimum amount is {{amount}}',
            max_staking: 'Amount exceeds limit',
            continue: 'Proceed',
            insufficient: 'Insufficient Balance',
            max_staking_alert: 'Remaining limit for fair usage: {{amount}}',
            position: 'Position details',
        },
        withdraw: {
            title: 'Withdraw',
            estimate: 'Estimated value: {{value}}',
            available: '{{amount}} {{symbol}} available',
            continue: 'Proceed',
        },
        before: {
            deposit: {
                __description:
                    'The information bottom sheet that pops up when user tries to initiate an earn position',
                title: 'Before Proceeding',
                subtext:
                    'Before you begin the staking process, carefully reviewing this information will guide you in your decision-making process.',
                continue: 'I understand',
                market: {
                    title: 'Unregulated Markets',
                    text: 'Earn utilizes Defi, which has potential risks that may lead to asset loss. Clave is an unhosted non-custodial wallet. Invest at your own risk.',
                },
                yield: {
                    title: 'Earning Every Minute',
                    text: 'Yields depend on the activity of the pool and may change daily. Rate is and estimation of annualized return calculated from last 24hr.',
                },
                withdraw: {
                    title: 'Flexible Withdraw',
                    text: 'Your earnings will be calculated continously and you can collect and withdraw any time you want.',
                },
            },
        },
        active: {
            position: {
                amount: 'Amount',
            },
        },
        banner: {
            info: 'You can earn up to ${{earn}} with $1000',
            learn: 'Tap here to learn more',
        },
        collect: {
            earnings: {
                title: 'Collect Earnings',
                subtext:
                    'You have earned {{earningAmount}} {{symbol}} so far. Do you want to collect your reward while withdrawing your funds?',
                withdrawal: 'Withdrawal Amount',
                earnings: 'Earnings',
                withdraw: {
                    both: 'Collect & Withdraw',
                    only: 'Only Withdraw',
                },
                back: 'Back',
            },
        },
        counter: {
            title: 'Estimated Earnings',
        },
        how_it_works: {
            title: 'How Earn Works?',
            subtext:
                'Clave is a self-custodial wallet that provides easy access to yield opportunities in DeFi, ensuring that your money remains in your control when you utilize Earn options.',
            defi: {
                title: 'Utilizing DeFi Protocols',
                text: 'You can earn yields while keeping your money in your custody.',
            },
            withdraw: {
                title: 'Flexible Withdraw',
                text: 'You can withdraw your assets along with your earnings at any time.',
            },
            apr: {
                title: 'Dynamic APR',
                text: "The yield comes from the underlying pool's commissions and changes dynamically based on usage.",
            },
            continue: 'Ready to Earn',
        },
        insufficient: {
            balance: {
                title: 'Insufficient {{token}}',
                subtext:
                    'You need at least {{min}} {{token}} to start earning. You can swap, deposit, or buy {{token}}.',
                swap: 'Swap to {{token}}',
                deposit: 'Deposit {{token}}',
                buy: 'Buy {{token}} (soon)',
            },
        },
        yield: {
            information: {
                title: 'How you earn?',
                compound: {
                    title: 'Compounded Yield',
                    text: 'This yield comes from rewards of {{token}} and is directly added to the deposited amount.',
                },
                collectible: {
                    title: 'Collectible Yield',
                    text: 'These are rewards provided by the underlying platform and need to be collected manually upon withdrawal.',
                },
                continue: 'Ready to Earn',
            },
        },
    },
    hub: {
        __description: 'Hub Page and Quick actions in Dashboard',
        title: 'Hub',
        all_actions: 'All Actions',
        start_with: 'Featured',
        widget: {
            title: 'Quick Actions',
            see_all: 'View All',
        },
        actions: {
            deposit: 'Deposit',
            deposit_text: 'Fund your wallet with crypto on zkSync Era',
            earn: 'Earn',
            earn_text: 'Start earning with your crypto on zkSync Era',
            guardians: 'Manage Guardians',
            guardians_text: 'Add your friends and trusted ones as guardians',
            browser: 'Browser',
            links: 'Payment Links',
            split: 'Split',
            buy: 'Buy',
            invest: 'Invest',
            get_started: 'Get started',
        },
    },
    recovery_notice: {
        __description:
            'The info bottom sheet when user tries to start recovery',
        title: 'Social Recovery',
        subtext:
            'If you have access to your account in this device, you will lose it after this step.',
        approval: 'I understand',
    },
    zksync_notice_bottom_sheet: {
        title: 'zkSync Era {{network}}',
        subtext:
            'Deposit only on zkSync Era {{network}}. If you send money to this account on Ethereum or any other chain, you will lose those funds.',
        approval: 'I understand',
        never_show: 'Do not show again',
    },
};
