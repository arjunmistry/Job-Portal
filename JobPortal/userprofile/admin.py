from django.contrib import admin
from .models import Interview, Userprofile
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

class ProfileInline(admin.StackedInline):
    model = Userprofile
    can_delete = False
    verbose_name_plural = 'Userprofile'
    fk_name = 'user'

class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline, )

    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(CustomUserAdmin, self).get_inline_instances(request, obj)

class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline, )
    list_display = ('username', 'email', 'is_employer', 'is_staff')
    list_select_related = ('userprofile',)

    def is_employer(self, instance):
        return instance.userprofile.is_employer
    is_employer.short_description = 'is_employer'

    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(CustomUserAdmin, self).get_inline_instances(request, obj)

# Register your models here.
admin.site.register(Interview)
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)